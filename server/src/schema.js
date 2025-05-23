import gql from "graphql-tag"
 
const typeDefs = gql`
  type Query {
    "Get Patient Data for Search"
    allPatients: [Patient!]
  }
   
  "Patient data should contain all aspects of a patient including orders and appointments"
  type Patient {
    id: ID!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    email: String!
    phoneNumber: String!
    streetAddress: String!
    city: String!
    state: String!
    zipCode: String!
    glOrders: GlOrder
    clOrders: ClOrder
  }
   
  "Glasses orders"
  type GlOrder {
    id: ID!
    orderDate: String!
    frameBrand: String!
    frameModel: String!
    lensType: String!
    lab: String!
    status: String!
    notes: Notes
  }
 
  type ClOrder {
    id: ID!
    orderDate: String!
    odBrand: String!
    osBrand: String!
    odBoxes: Int!
    osBoxes: Int!
    status: String!
    notes: Notes
  }

  type Users {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
  }

  type Notes {
    id: ID!
    user: [Users!]
    message: String!
  }

  type Mutation {
    addPatient(firstName: String!, lastName: String!, dateOfBirth: String!, phoneNumber: String!, streetAddress: String!, city: String!, state: String!, zipCode: String!): Patient
  }
`;
export default typeDefs;