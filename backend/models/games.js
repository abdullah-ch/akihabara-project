const mongoose = require("mongoose");

// Creating a Schema

const schemaGame = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },

  gameStudio: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

// Modeling a Class on my Schema

const Games = mongoose.model("Games", schemaGame);

module.exports.Games = Games;
