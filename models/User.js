const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  games: [Object]
});

module.exports = Item = mongoose.model("item", ItemSchema);
