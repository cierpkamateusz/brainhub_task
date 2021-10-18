const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const eventRouter = require("./routers/eventRoutes");
const errorHandler = require("./errors/ErrorHandlers");
const HTTP404Error = require("./errors/HTTP404Error");

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use("/events/", eventRouter);
app.all("*", (req, res, next) => {
  next(new HTTP404Error(`${req.originalUrl} not found`));
});

app.use(errorHandler);

module.exports = app;
