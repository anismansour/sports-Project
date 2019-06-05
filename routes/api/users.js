const express = require("express");
const router = express.Router();

//Item Model
const User = require("../../models/User");

// @route GET  api/users
router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

// @route post  api/users
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password
  });
  newUser.save().then(user => res.json(user));
});

module.exports = router;
