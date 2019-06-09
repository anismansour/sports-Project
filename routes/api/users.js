const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//Item Model
const User = require("../../models/User");

//  profile  NOT WORKING !!!!!!!
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (err) {
    res.json({ err });
  }
});

// @route GET local  api/users
router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

// @route to login

router.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    res.json({
      user: foundUser,
      success: foundUser ? false : true
    });
  } catch (err) {
    res.json({ err });
  }
});

// @route post create  api/users
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  newUser.save().then(user => res.json(user));
});

// @route delete  api/users
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    //return success true if deleted
    .then(user => user.remove().then(() => res.json({ success: true })))
    //return 404 false if error
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
