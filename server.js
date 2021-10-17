const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE;
mongoose
  .connect(db)
  .then(() => console.log("Successfully connected with database!"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
