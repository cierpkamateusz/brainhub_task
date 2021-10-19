/* eslint-disable no-restricted-syntax */
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongoServer = new MongoMemoryServer();

module.exports.connectDB = async () => {
  const uri = await mongoServer.getUri();
  await mongoose.connect(uri);
};

module.exports.closeDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};

module.exports.clearDB = async () => {
  await mongoose.connection.collections.events.deleteMany();
};
