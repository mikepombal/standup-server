import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { MutationResolvers } from '../generated/graphqlgen';

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
};
