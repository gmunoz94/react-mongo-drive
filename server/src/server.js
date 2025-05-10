const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require('./schema');
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const mocks = {
  Query: () => ({
    searchPatient: () => [...new Array(6)],
  }),
  Patient: () => ({
    id: () => "1",
    firstName: () => "Thomas",
    lastName: () => "Edison",
    dateOfBirth: () => "1995-04-02",
    email: () => "evano@gmail.com",
    phoneNumber: () => "1111111111",
    streetAddress: () => "123 main st",
    city: () => "Austin",
    state: () => "TX",
    zipCode: () => "78913",
    glOrders: () => {
      return {
        id: 1,
        orderDate: "04/25/2025",
        frameBrand: "Armani Exchange",
        frameModel: "AX 1035",
        lensType: "SV",
        lab: "In House",
        status: "Pending",
      };
    },
    modulesCount: () => 6,
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({typeDefs}),
      mocks,
    })
  })

  const { url } = await startStandaloneServer(server);
  console.log(`
    Server is Running!
    Query at ${url}`
  );
}

startApolloServer();