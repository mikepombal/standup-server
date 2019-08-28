require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

import { GraphQLServer } from 'graphql-yoga';
import * as resolvers from './resolvers';
import { prisma } from './generated/prisma-client';
import { permissions } from './permissions';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    middlewares: [permissions],
    context: ({ request }) => ({
        request,
        db: prisma,
    }),
});

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`));
