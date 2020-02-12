import { rule, shield } from 'graphql-shield';
import { getAuthenticatedUser } from '../utils';

const rules = {
    isAuthenticatedUser: rule()(async (parent, args, context) => {
        const user = await getAuthenticatedUser(context);
        return Boolean(user);
    }),
};

export const permissions = shield({
    Query: {
        listUsers: rules.isAuthenticatedUser,
        getLastUpdate: rules.isAuthenticatedUser,
    },
    Mutation: {
        addUpdates: rules.isAuthenticatedUser,
    },
});
