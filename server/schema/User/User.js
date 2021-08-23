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
  }
})

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true
  },
  result: [Result],
  points: [Point]
});

const User = mongoose.model("quizzes", UserSchema);
module.exports = User;
