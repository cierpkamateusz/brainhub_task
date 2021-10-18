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
