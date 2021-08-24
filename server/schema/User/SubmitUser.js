const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Result = new mongoose.Schema({
  question: {
    type: String,
  },
  value: {
    type: String,
  },
});

const Point = new mongoose.Schema({
  extravert: {
    type: String,
  },
  feeling: {
    type: String,
  },
  introvert: {
    type: String,
  },
  intuitive: {
    type: String,
  },
  rational: {
    type: String,
  },
  reasonable: {
    type: String,
  },
  sensing: {
    type: String,
  },
  spontaneous: {
    type: String,
  },
});

const UserSubmitSchema = mongoose.Schema({
  result: [Result],
  points: [Point],
});

const UserSubmit = mongoose.model("guests", UserSubmitSchema);
module.exports = UserSubmit;
