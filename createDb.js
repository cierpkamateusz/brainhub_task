const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017/test";
  const client = new MongoClient(uri);
  // client.connect((err) => {
  //   const collection = client.db("test").collection("devices");
  //   // .insertOne({ n: "asd" });
  //   // perform actions on the collection object
  //   client.close();
  // });
  await client.connect();
  const collection = await client.db("test").collection("devices");
  await collection.insertOne({ n: "nasd123" });
  client.close();
}
main().catch(console.error);
