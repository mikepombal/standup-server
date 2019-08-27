import { AuthPayloadResolvers } from '../generated/graphqlgen';

export const AuthPayload: AuthPayloadResolvers.Type = {
    ...AuthPayloadResolvers.defaultResolvers,

    user: (parent, args, ctx) => {
        // throw new Error('Resolver AuthPayload not implemented');
        return {
            firstname: 'firstNameAuth',
            surname: 'surnameAuth',
            username: 'usernameAuth',
            role: 'BASIC',
        };
    },
};
