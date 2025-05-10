const resolvers = {
  Query: {
    allPatients: (_, __, { dataSources }) => {
      return dataSources.patientAPI.allPatients();
    }
  }
}

export default resolvers