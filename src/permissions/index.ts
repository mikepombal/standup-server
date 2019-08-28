import { rule, shield } from 'graphql-shield';
import { getUsername } from '../utils';

const rules = {
    isAuthenticatedUser: rule()((parent, args, context) => {
        const username = getUsername(context);
        return Boolean(username);
    }),
};

export const permissions = shield({
    Query: {
        listUsers: rules.isAuthenticatedUser,
    },
});
