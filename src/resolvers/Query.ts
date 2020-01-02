import { QueryResolvers } from '../generated/graphqlgen';
import { FragmentableArray, User, Update } from '../generated/prisma-client';
import { LastUpdate } from '../types';

const fragment = `
    fragment UserWithLastUpdate on User {
        username
        firstname
        status
        updates (orderBy: date_ASC, last: 1){
            date
        }
    }
`;
export const Query: QueryResolvers.Type = {
    info: () => 'Standup Server!!!',
    listUsers: (parent, args, ctx) => ctx.db.users(),
    getLastUpdate: async (parent, args, ctx) => {
        const users = await ctx.db.users().$fragment<FragmentableArray<User & { updates: Array<Update> }>>(fragment);

        return users
            .reduce(
                (acc: Array<LastUpdate>, user) =>
                    user.status === 'ACTIVE'
                        ? [
                              ...acc,
                              {
                                  username: user.username,
                                  firstname: user.firstname,
                                  lastUpdate: user.updates.length ? user.updates[0].date.substring(0, 10) : null,
                              },
                          ]
                        : acc,
                []
            )
            .sort((a, b) => ((a.lastUpdate || '0') < (b.lastUpdate || '0') ? -1 : 1));
    },
    githubLoginUrl: () =>
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}&scope=user`,
};
