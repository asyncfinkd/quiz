const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

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

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
