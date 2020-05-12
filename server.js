console.log("Travbot is booting up!");

require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./models");
const userData = require("./models/user.js");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userData", {
  useNewUrlParser: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

// HTML ROUTES ====================================================
app.use(express.static("client/build"));
// app.use(express.static("client/public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
  // res.sendFile(path.join(__dirname, "/client/public/index.html"));
});
//==================================================================

// MONGOOSE ROUTES =================================================
// Later we'll pull these routes into a routes folder, and then require the routes
app.get("/api/users", (req, res) => {
  console.log(userData);
  db.userData
    .find({})
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/users", (req, res) => {
  db.userData
    .create(req.body)
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
//==================================================================

// API ROUTES ======================================================
// id --   e61b06cb
// api key --    0f4b8fc49b430d828c3c2a0b28246429
// sample endpoint --   https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=e61b06cb&app_key=0f4b8fc49b430d828c3c2a0b28246429&results_per_page=20&what=javascript%20developer&content-type=application/json

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
