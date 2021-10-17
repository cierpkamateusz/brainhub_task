const Event = require("../models/eventModel");

// exports.checkEvent = (req, res, next) => {
//   if (
//     !req.body.firstName ||
//     !req.body.lastName ||
//     !req.body.email ||
//     !req.body.date
//   ) {
//     return res.status(400).json({
//       message: "Missing fields. All fields are required",
//     });
//   }
//   next();
// };

exports.getAllEvents = (req, res) => {
  res.status(200).json({
    msg: "getAllEvents",
  });
};

exports.postEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newEvent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
