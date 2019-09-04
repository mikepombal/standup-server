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

export interface LastUpdate {
    username: string;
    firstname: string;
    lastUpdate: string | null;
}

export interface AuthPayload {
    token: string;
    user: User;
}
