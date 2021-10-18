const express = require("express");

const { postEvent } = require("../controllers/eventController");

const eventRouter = express.Router();
eventRouter.route("/").post(postEvent);

module.exports = eventRouter;
