const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//Item Model
const User = require("../../models/User");

// // @ route GET  SPORTSFEED API

// const MySportsFeeds = require("mysportsfeeds-node");

// const msf = new MySportsFeeds("1.2", true);
// msf.authenticate("a9982c0c-bc5e-4a44-a84a-0a430c", "anismansour");

// router.get("/sports", async (req, res) => {
//   // const odds = await fetch(
//   //   "https://api.the-odds-api.com/v3/sports/?apiKey=910ea1aa412189a38f04b3817176063d"
//   // );
//   const odds = await fetch(
//     "https://api.the-odds-api.com/v3/odds/?apiKey=910ea1aa412189a38f04b3817176063d&sport=tennis_atp_french_open&region=us&mkt=h2h"
//   );
//   const parsedOdds = await odds.json();
//   res.json(parsedOdds);
// });

// @route GET local  api/users
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
