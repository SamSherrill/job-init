require("dotenv").config();
const express = require("express");
const path = require("path");
// const db = require("./models");
// const userData = require("./models/user.js");
const mongoose = require("mongoose");
const TestController = require("./controllers/testController");
const UserController = require("./controllers/userController");

const PORT = process.env.PORT || 3001;

const app = express();



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

app.use("/api/test", TestController);
app.use("/api/users", UserController);
app.use("/api/users/userByEmail", UserController);
app.use("/api/users/userById", UserController);

// API ROUTES ======================================================
// id --   e61b06cb
// api key --    0f4b8fc49b430d828c3c2a0b28246429
// sample endpoint --   https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e61b06cb&app_key=0f4b8fc49b430d828c3c2a0b28246429&results_per_page=20&what=javascript%20developer&content-type=application/json

// React ROUTES ====================================================
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
//==================================================================

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
