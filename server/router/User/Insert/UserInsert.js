const router = require("express").Router();
const UserSchema = require("../../../schema/User/User");
const nodemailer = require("nodemailer");
const env = require("../../../env.json");

router.route("/insertUsers").post(async (req, res) => {
  let img = req.body.img;
  const points = req.body.points;
  const email = req.body.email;
  const language = req.body.language;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const age = req.body.age;
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

  var base64Data = req.body.img.replace(/^data:image\/png;base64,/, "");

  require("fs").writeFile("out.png", base64Data, "base64", function (err) {});
  const renderAttachment = [];
  const renderAttachment1 = [];

  renderAttachment1.push({
    filename: `ENFJ.pdf`,
    path: `./router/User/Insert/path/ENFJ.pdf`,
  });
  renderAttachment.push({
    filename: `out.png`,
    path: `./out.png`,
  });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${env.user}`,
      pass: `${env.pass}`,
    },
  });

  let mailList = [
    `od@deeptan.com.ua`,
    `mickey@kkc-group.com`,
    `zuckdeveloper@gmail.com`,
  ];
  let mailOptions = {
    from: `${env.user}`,
    to: mailList,
    subject: `Result`,
    html: `
      <p>Candidate: ${name} ${lastname}</p>
      <p>Age: ${age}</p>
      <p>Gmail/Email: ${email}</p>

      <p>Status: ${identifyPoints.map((item) => {
        return item;
      })}</p>
      
      <small>Show result in out.png</small>
    `,
    attachments: [
      {
        filename: `out.png`,
        path: `./out.png`,
      },
      {
        filename: `${fullElementSplited.toUpperCase()}.pdf`,
        path: `./router/User/Insert/path/${fullElementSplited.toUpperCase()}.pdf`,
      },
    ],
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error occurs: ", err);
    } else {
      console.log("email sent");
    }
  });
  res.json("sent gmail/email");
});

router.route("/insertUser").post(async (req, res) => {
  const points = req.body.points;
  const email = req.body.email;
  const result = req.body.result;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const age = req.body.age;

  const insertUserSchema = new UserSchema({
    email: email,
    name: name,
    lastname: lastname,
    age: age,
    result: result,
    points: points,
  });

  insertUserSchema.save();
  res.json("insert");
});

module.exports = router;
