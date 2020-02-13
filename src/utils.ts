import { verify } from 'jsonwebtoken';
import { Context } from './types';

interface Token {
    username: string;
}

export async function getAuthenticatedUser(ctx: Context) {
    const Authorization = ctx.request.get('Authorization');
    const Username = ctx.request.get('Username');
    if (Authorization && Username) {
        const token = Authorization.replace('Bearer ', '');
        const user = await ctx.db.user({ username: Username });
        if (!user) {
            return { error: new Error('User not valid') };
        }
        if (user.token !== token) {
            return { error: new Error('Token not valid') };
        }
        return { user };
    }
    return {};
}
