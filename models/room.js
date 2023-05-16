var mongoose = require("mongoose");

const reservationSchema = require("./reservation").schema;

var roomSchema = new mongoose.Schema({
  name: String,
  noOfSeats: Number,
  isAvailable: Boolean,
  location: String,
  price2hours: Number,
  reservation: {
    required: false,
    type: reservationSchema
  }
});
var Room = mongoose.model("Room", roomSchema);

module.exports.model = Room;
module.exports.schema = roomSchema;
