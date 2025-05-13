// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import typeDefs from './schema.js';
const mongoose = require("mongoose")
const express = require("express")
const dotenv = require('dotenv').config();
const Patient = require('../models/patient.model')
const patientRoutes = require('../routes/patient.route.js')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/patients", patientRoutes);

mongoose.connect(process.env.ATLAS_URI)
.then(() => {
  console.log("Connected to Database")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})
.catch(() => {
  console.log("Connection Failed")
});



// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//   })

//   const { url } = await startStandaloneServer(server);
//   console.log(`
//     Server is Running!
//     Query at ${url}`
//   );
// }

// db.once('open', () => {
// })

// startApolloServer();