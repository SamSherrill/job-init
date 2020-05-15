const express = require("express");
const router = express.Router();
const db = require("../models");
const userData = require("../models/user.js");

router.post("/", (req, res) => {
  console.log("Hit the controller post route for /api/users");
  console.log(req.body);
  db.userData
    .create(req.body)
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
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

module.exports = router;
