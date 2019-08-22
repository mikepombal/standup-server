require('dotenv').config();

import { GraphQLServer } from 'graphql-yoga';
import * as resolvers from './resolvers';
import { prisma } from './generated/prisma-client';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { db: prisma },
});

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`));
