const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Result = new mongoose.Schema({
  id: {
    type: String,
  },
  question: {
    type: String,
  },
  value: {
    type: String,
  },
});

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  result: [Result],
});

const User = mongoose.model("quizzes", UserSchema);
module.exports = User;
