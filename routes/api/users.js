const express = require("express");
const router = express.Router();

//Item Model
const User = require("../../models/User");

// @route GET  api/user
router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

module.exports = router;
