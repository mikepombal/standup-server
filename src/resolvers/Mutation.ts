import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { MutationResolvers } from '../generated/graphqlgen';
import { Context } from '../types';

type Credential = {
    client_id: string;
    client_secret: string;
    code: string;
};

const requestGithubToken = (credentials: Credential) =>
    fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(credentials),
    })
        .then(res => res.json())
        .catch(error => {
            throw new Error(JSON.stringify(error));
        });

const requestGithubUserAccount = (token: string) =>
    fetch(`https://api.github.com/user?access_token=${token}`).then(res => res.json());

const requestGithubUser = async (credentials: Credential) => {
    const { access_token } = await requestGithubToken(credentials);
    const githubUser = await requestGithubUserAccount(access_token);
    return { login: githubUser.login, access_token };
};

const isUserAndUpdateValid = async (ctx: Context, username: string, date: string) => {
    const user = await ctx.db.user({ username });
    if (!user) {
        throw new Error(`No such ${username} user found`);
    }
    const update = await ctx.db.user({ username }).updates({ where: { date } });
    if (update.length) {
        throw new Error(`${username} already has an update on ${date}`);
    }
    return true;
};

const addUpdate = (username: string, date: string) => {
    const alias = `alias_${Math.random()
        .toString(36)
        .slice(2)}`;

    return `
      ${alias}: createUpdate(data: {
        user: {
          connect: {
            username: "${username}"
          }
        }
        date: "${date}"
      }) {
        id
      }
    `;
};

export const Mutation: MutationResolvers.Type = {
    login: async (parent, args, ctx) => {
        const user = await ctx.db.user({ username: args.usrname }); //ctx.prisma.user({ email: args.email });
        if (!user) {
            throw new Error('No such user found');
        }
        const valid = await bcrypt.compare(args.password, user.password);
        if (!valid) {
            throw new Error('Invalid password');
        }

        if (!process.env.APP_SERVER_SECRET) {
            throw new Error('Missing APP_SERVER_SECRET');
        }
        const token = jwt.sign({ username: user.username }, process.env.APP_SERVER_SECRET);

        //const hashedPassword = await bcrypt.hash('test1234', 10);
        return {
            token,
            user,
        };
    },
    authorizeWithGithub: async (parent, { code }, ctx) => {
        // 1. Obtain data from GitHub about user
        const githubUser = await requestGithubUser({
            client_id: process.env.GITHUB_OAUTH_CLIENT_ID || '',
            client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET || '',
            code,
        });
        // 2. check user is registered
        const user = await ctx.db.user({ username: githubUser.login });
        if (!user) {
            throw new Error('No such user found');
        }
        return {
            token: 'test',
            user,
        };
    },
    addUpdates: async (parent, args, ctx) => {
        // first check if users exist and if a update date was already added to
        await Promise.all(args.usrnames.map(username => isUserAndUpdateValid(ctx, username, args.date)));

        const mutations = args.usrnames.map(name => addUpdate(name, args.date));
        const joinedMutations = mutations.join('\n');
        const result = await ctx.db.$graphql(`mutation addUpdates { ${joinedMutations} }`);

        return `Success adding update for [${args.usrnames}] on ${args.date}`;
    },
};
