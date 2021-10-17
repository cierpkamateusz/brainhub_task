const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "firstName is required"] },
  lastName: { type: String, required: [true, "lastName is required"] },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "email is not valid",
    ],
  },
  date: { type: Date, required: [true, "date is required"] },
});
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
