const router = require("express").Router();
const UserSchema = require("../../../schema/User/User");
const nodemailer = require("nodemailer");

router.route("/insertUser").post(async (req, res) => {
  const email = req.body.email;
  const result = req.body.result;

  const insertUserSchema = new UserSchema({
    email: email,
    result: result,
  });

  insertUserSchema.save();
  res.json("insert");

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "billgatesprogrammer@gmail.com",
      pass: "nikanikonika",
    },
  });

  let mailOptions = {
    from: "billgatesprogrammer@gmail.com",
    to: `${email}`,
    subject: "Result",
    text: `Hello, This is your Result:
${result.map((item) => {
return "Question: " + item.question + "\n" + "Answer: " + item.value + "\n";
})}`
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error occurs");
    } else {
      console.log("email sent");
    }
  });
});

module.exports = router;
