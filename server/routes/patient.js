import express from "express";

import db from "../src/configuration/dbConfig.js";

import { ObjectId } from "mongodb";

const router = express.Router();

router.get('/patients/search/', async (req, res) => {
  let collection = await db.collection('Patients');
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
})

router.post('/patients/add', async (req, res) => {
  try {
    let newDocument = req.body
    let collection = await db.collection('Patients');
    let results = await collection.insertOne(newDocument);
    res.send(results)
  } catch (err) {
    console.error(err);
    res.status(500).send("Error Adding Record")
  } 
} )

export default router;