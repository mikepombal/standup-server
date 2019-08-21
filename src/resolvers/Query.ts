import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
    info: () => 'Standup Server!!!',
    listUsers: (parent, args, ctx) => ctx.db.users(),
};
