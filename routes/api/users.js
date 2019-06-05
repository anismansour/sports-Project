const express = require("express");
const router = express.Router();

//Item Model
const User = require("../../models/User");

// @route GET  api/users
router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
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
