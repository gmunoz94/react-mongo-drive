const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require('./schemas/schema');
const resolvers = require('./schemas/resolvers');
const PatientAPI = require("./datasources/patient-api");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          patientAPI: new PatientAPI({ cache }),
        }
      }
    }
  });
  console.log(`
    Server is Running!
    Query at ${url}`
  );
}

startApolloServer();