const router = require("express").Router();
const AdminSigninSchema = require("../../../schema/admin/signin/AdminSigninSchema");

router.route("/signin").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  AdminSigninSchema.findOne({ email: email }).then((res2) => {
    if (res2 === null) {
      res.json({ message: "user is not defined", success: false });
    } else if (res2.password === password) {
      res.json({
        user: {
          name: res2.name,
          surname: res2.surname,
          status: res2.status,
          email: email,
        },
        success: true,
      });
    } else {
      res.json({ message: "password is invalid", success: false });
    }
  });
});

module.exports = router;
