import { Prisma } from './generated/prisma-client';

export interface Context {
    db: Prisma;
}

export interface User {
    username: string;
    firstname: string;
    surname: string;
}
