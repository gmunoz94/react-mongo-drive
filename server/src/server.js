import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from './schema.js';
import mongoose from 'mongoose';
import express from 'express';
import db from './configuration/dbConfig.js'

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.set('strictQuery', false)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
  })

  const { url } = await startStandaloneServer(server);
  console.log(`
    Server is Running!
    Query at ${url}`
  );
}

startApolloServer();