const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const users = require("./routes/api/users");
const games = require("./routes/api/games");
require("dotenv").config();

const app = express();

//Middleware

app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;
// const db = process.env.MONGODB_URI;

//connect to mongo

mongoose
  .connect(db)
  .then(() => console.log("mongodb connected <---------"))
  .catch(err => console.log(err));

// use route  -->  anything that goes to api/items
//goes to item
app.use("/api/users", users);
app.use("/api/games", games);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "built", "index.html"));
  });
}

// const port = process.env.PORT || 5000;
const port = process.env.PORT || 6000;
app.listen(port, () =>
  console.log(`------>server started on ${process.env.PORT}`)
);
