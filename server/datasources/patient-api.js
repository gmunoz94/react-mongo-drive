import { MongoDataSource } from "apollo-datasource-mongodb";

export default class Patients extends MongoDataSource {

  allPatients() {
    return this.findByFields({
      firstName: "Evan"
    });
  }
}