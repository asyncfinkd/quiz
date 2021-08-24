const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const AdminSchema = mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Signin = mongoose.model("admins", AdminSchema);
module.exports = Signin;
