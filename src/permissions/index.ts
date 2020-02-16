import { rule, shield } from 'graphql-shield';
import { getAuthenticatedUser } from '../utils';

const isAuthenticatedUser = rule()(async (parent, args, context) => {
    const { user, error } = await getAuthenticatedUser(context);
    if (error) {
        return error;
    }
    return Boolean(user);
});

const isAdmin = rule()(async (parent, args, context) => {
    const { user, error } = await getAuthenticatedUser(context);
    if (error) {
        return error;
    }
    return Boolean(user && (user.role === 'ADMIN' || user.role === 'SUPERADMIN'));
});

export const permissions = shield({
    Query: {
        listUsers: isAuthenticatedUser,
        getLastUpdate: isAuthenticatedUser,
    },
    Mutation: {
        addUpdates: isAdmin,
    },
});
