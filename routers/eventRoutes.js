const express = require("express");

const { postEvent, getAllEvents } = require("../controllers/eventController");

const eventRouter = express.Router();
eventRouter.route("/").get(getAllEvents).post(postEvent);

module.exports = eventRouter;
