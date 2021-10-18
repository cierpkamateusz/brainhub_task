const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE;
const port = process.env.PORT;

console.log(`Connecting to DB ${db}... `);
mongoose
  .connect(db)
  .then(() => {
    console.log("Successfully connected with database!");

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(`DB ${db}connection failed`, err);
    process.exit(1);
  });
