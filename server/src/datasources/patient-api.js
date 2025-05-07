const { RESTDataSource } = require('@apollo/datasource-rest');

class PatientAPI extends RESTDataSource {
  baseURL = "mongodb://localhost:27017/react-mongo-drive"

  searchPatient() {
    return this.get(`patient/${firstName}`);
  }
}

module.exports = PatientAPI;