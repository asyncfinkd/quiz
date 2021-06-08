const router = require("express").Router();
const UserSchema = require("../../../schema/User/User");

router.route("/insertUser").post(async (req, res) => {
  const username = req.body.username;

  const insertUserSchema = new UserSchema({
    username: username,
  });
  insertUserSchema.save();
  res.json("insert");
});
