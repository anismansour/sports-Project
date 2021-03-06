const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const User = require("../../models/User");

// @ route GET  SPORTSFEED API

const MySportsFeeds = require("mysportsfeeds-node");

const msf = new MySportsFeeds("1.2", true);
msf.authenticate("a9982c0c-bc5e-4a44-a84a-0a430c", "anismansour");

router.get("/", async (req, res) => {
  const odds = await fetch(
    `https://api.the-odds-api.com/v3/sports/?apiKey=${process.env.KEY}`
  );

  const parsedOdds = await odds.json();
  // console.log(parsedOdds);
  res.json(parsedOdds);
});

router.get("/details/:sport", async (req, res) => {
  const odds = await fetch(
    `https://api.the-odds-api.com/v3/odds/?apiKey=${process.env.KEY}&sport=${
      req.params.sport
    }&region=us&mkt=h2h`
  );
  const parsedOdds = await odds.json();
  // console.log(parsedOdds);
  res.json(parsedOdds);
});

router.post("/:id", async (req, res) => {
  try {
    // console.log("hit");
    console.log(req.params.id);
    const foundUser = await User.findById(req.params.id);
    // console.log(foundUser);
    foundUser.games.push(req.body);
    await foundUser.save();
    res.json({
      success: true
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
