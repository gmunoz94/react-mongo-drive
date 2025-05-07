const resolvers = {
  Query: {
    searchPatient: (_, {firstName}, { dataSources }) => {
      return dataSources.patientAPI(searchPatient(firstName));
    }
  },
}

module.exports = resolvers;