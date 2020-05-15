const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Hit the controller post route for /api/users");
  res.json(req.body);
});

module.exports = router;
