const express = require("express");
const router = express.Router();
const db = require("../models");
const userData = require("../models/user.js");

router.post("/userByEmail", (req, res) => {
  console.log(userData, "get user by email and passwd");
  console.log(req.body, "get user req body");
  db.userData
    .findOne(req.body)
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/userById", (req, res) => {
  console.log(userData, "get user by id");
  console.log(req.body, "get user req body");
  db.userData
    .findById(req.body)
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  console.log("Hit the controller post route for /api/users");
  console.log(req.body, "req.body");
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
