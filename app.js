const express = require("express");
const eventRouter = require("./routers/eventRoutes");

const app = express();

app.use(express.json());
app.use("/events/", eventRouter);

module.exports = app;
