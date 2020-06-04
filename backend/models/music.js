const mongoose = require("mongoose");

// Creating a Schema

const schemaMusic = new mongoose.Schema({
  musicName: {
    type: String,
    required: true,
  },

  singer: {
    type: String,
    required: true,
  },

  releaseYear: {
    type: String,
    required: true,
  },

  price: {
    type: number,
    required: true,
  },
});

// Modeling a Class on my Schema

const Music = mongoose.model("Music", schemaMusic);

module.exports.Music = Music;
