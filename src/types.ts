import { Prisma } from './generated/prisma-client';

export interface Context {
    db: Prisma;
    request: any;
}

export interface User {
    username: string;
    firstname: string;
    surname: string;
    role: 'SUPERADMIN' | 'ADMIN' | 'BASIC' | 'NONE';
}

export interface AuthPayload {
    token: string;
    user: User;
}
