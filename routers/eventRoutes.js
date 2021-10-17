const express = require("express");

const { getAllEvents, postEvent } = require("../controllers/eventController");

const eventRouter = express.Router();
eventRouter.route("/").get(getAllEvents).post(postEvent);

module.exports = eventRouter;
