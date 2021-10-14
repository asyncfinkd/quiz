const router = require("express").Router();
const UserSubmitSchema = require("../../../schema/User/SubmitUser");
const nodemailer = require("nodemailer");
const env = require("../../../env.json");

router.route("/insertSubmitUser").post(async (req, res) => {
  const result = req.body.result;
  const points = req.body.points;
  const identifyPoints = [];

  // first section
  if (points[0].extravert >= points[0].introvert) {
    identifyPoints.push("Extravert");
  } else if (points[0].extravert <= points[0].introvert) {
    identifyPoints.push("Introvert");
  }
  // second section
  if (points[0].sensing >= points[0].intuitive) {
    identifyPoints.push("Sensing");
  } else if (points[0].sensing <= points[0].intuitive) {
    identifyPoints.push("Intuitive");
  }
  // third section
  if (points[0].rational >= points[0].feeling) {
    identifyPoints.push("Rational");
  } else if (points[0].rational <= points[0].feeling) {
    identifyPoints.push("Feeling");
  }
  // four section
  if (points[0].reasonable >= points[0].spontaneous) {
    identifyPoints.push("Reasonable");
  } else if (points[0].reasonable <= points[0].spontaneous) {
    identifyPoints.push("Spontaneous");
  }

  let mailList = [
    `od@deeptan.com.ua`,
    `mickey@kkc-group.com`,
    `zuckdeveloper@gmail.com`,
  ];
  const firstElementSplit = identifyPoints[0][0].toLocaleLowerCase();
  if (identifyPoints[1][0].toLocaleLowerCase() == "s") {
    var secondElementSplit = "s";
  } else if (identifyPoints[1][0].toLocaleLowerCase() == "i") {
    var secondElementSplit = "n";
  }
  if (identifyPoints[2][0].toLocaleLowerCase() == "r") {
    var thirdElementSplit = "t";
  } else if (identifyPoints[2][0].toLowerCase() == "f") {
    var thirdElementSplit = "f";
  }
  if (identifyPoints[3][0].toLowerCase() == "r") {
    var fourElementSplit = "j";
  } else if (identifyPoints[3][0].toLowerCase() == "s") {
    var fourElementSplit = "p";
  }

  var fullElementSplited =
    firstElementSplit +
    secondElementSplit +
    thirdElementSplit +
    fourElementSplit;

  const renderAttachment = [];

  renderAttachment.push({
    filename: `${fullElementSplited.toUpperCase()}.docx`,
    path: `./router/User/Insert/path/${fullElementSplited.toUpperCase()}.docx`,
  });
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${env.user}`,
      pass: `${env.pass}`,
    },
  });

  let mailOptions = {
    from: `${env.user}`,
    to: mailList,
    subject: "Result",
    text: ` Hello, This is your Result:

${result.map((item) => {
  return "Question: " + item.question + "\n" + "Answer: " + item.value + "\n";
})}
Status: ${identifyPoints.map((item) => {
      return item;
    })}`,
    attachments: renderAttachment,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error occurs: ", err);
    } else {
      console.log("email sent");
    }
  });

  const insertUserSchema = new UserSubmitSchema({
    result: result,
    points: points,
  });

  insertUserSchema.save();
  res.json("insert");
});

module.exports = router;
