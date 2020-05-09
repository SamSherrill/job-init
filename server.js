console.log("Travbot is booting up!");

require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./models");
const userData = require("./models/user.js");

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
// app.use(express.static("client/build"));
app.use(express.static("client/public"));

app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});
//==================================================================

// MONGOOSE ROUTES =================================================
app.get("/api/users", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});


//==================================================================

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});