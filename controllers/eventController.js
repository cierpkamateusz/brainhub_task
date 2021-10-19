const HTTP400Error = require("../errors/HTTP400Error");
const Event = require("../models/eventModel");

exports.postEvent = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        event: newEvent,
      },
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return next(new HTTP400Error(err.message));
    }
    next(err);
  }
};

exports.getAllEvents = async (req, res, next) => {
  try {
    const allEvents = await Event.find();
    res.status(200).json({
      status: "success",
      data: {
        events: allEvents,
      },
    });
  } catch (err) {
    next(err);
  }
};
