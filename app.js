import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";
import characterRoute from "./routes/characters.js";
import songRoute from "./routes/songs.js";
const mongoURI = process.env.DATABASE_URL;
const client = new MongoClient(mongoURI);

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
};

const connectDB = async () => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB");
    const testDB = client.db("Peacemaker").collection("Characters");
    const oneResult = await testDB.findOne({
      name: "Christopher Smith, Peacemaker",
    });
    const allResult = await testDB.find();
    // Make the appropriate DB calls
    await listDatabases(client);
    console.log(oneResult);
    const allRes = await allResult.toArray();
    console.log(`All Result has ${await allResult.count()} Records`);
    console.log(allRes);
  } catch (e) {
    console.error(e);
  }
};

connectDB();
const app = express();

export default app;
