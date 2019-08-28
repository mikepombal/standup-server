import { verify } from 'jsonwebtoken';
import { Context } from './types';

interface Token {
    username: string;
}

export function getUsername(context: Context) {
    const Authorization = context.request.get('Authorization');
    if (!process.env.APP_SERVER_SECRET) {
        throw new Error('Missing APP_SERVER_SECRET');
    }
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const verifiedToken = verify(token, process.env.APP_SERVER_SECRET) as Token;
        return verifiedToken && verifiedToken.username;
    }
    return null;
}
