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
    "https://api.the-odds-api.com/v3/sports/?apiKey=910ea1aa412189a38f04b3817176063d"
  );

  const parsedOdds = await odds.json();
  console.log(parsedOdds);
  res.json(parsedOdds);
});

router.get("/details/:sport", async (req, res) => {
  const odds = await fetch(
    `https://api.the-odds-api.com/v3/odds/?apiKey=910ea1aa412189a38f04b3817176063d&sport=${
      req.params.sport
    }&region=us&mkt=h2h`
  );
  const parsedOdds = await odds.json();
  console.log(parsedOdds);
  res.json(parsedOdds);
});

module.exports = router;
