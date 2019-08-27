import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
    login: (parent, args, ctx) => {
        return {
            token: 'TestToken',
        };
    },
};
