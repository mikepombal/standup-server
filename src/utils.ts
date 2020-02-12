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
        if (user && user.token === token) {
            return user;
        }
    }
    return null;
}
