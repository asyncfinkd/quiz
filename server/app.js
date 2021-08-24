const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const env = require("./env.json");

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://nikashamiladze:nikashamiladze@cluster0.jjmuh.mongodb.net/quiz?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserInsert = require("./router/User/Insert/UserInsert");
app.use("/auth", UserInsert);

const AdminSignin = require("./router/admin/signin/AdminSigninRouter");
app.use("/auth", AdminSignin);

const PORT = process.env.PORT || env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
