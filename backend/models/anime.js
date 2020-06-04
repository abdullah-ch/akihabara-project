const mongoose = require("mongoose");

// Creating a Schema

const schemaAnime = new mongoose.Schema({
  animeName: {
    type: String,
    required: true,
  },

  animeStudio: {
    type: String,
    required: true,
  },

  animeDirector: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
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

const Animes = mongoose.model("Animes", schemaAnime);

module.exports.Animes = Animes;
