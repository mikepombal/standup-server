import { GraphQLServer } from 'graphql-yoga';
import * as resolvers from './resolvers';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
});

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`));
