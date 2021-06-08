const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})

const User = mongoose.model("quiz", UserSchema);
module.exports = User;