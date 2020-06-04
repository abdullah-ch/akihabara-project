const mongoose = require("mongoose");

// Creating a Schema

const schemaMovie = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },

  movieDirector: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  screenplay: {
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

const Movies = mongoose.model("Movies", schemaMovie);

module.exports.Movies = Movies;
