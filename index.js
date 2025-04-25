const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://gmunozii:vQtGtxwF6HAoBUL9@cluster0.x34qzpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection('movies');

    const query = { title: "Back to the Future"};
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);