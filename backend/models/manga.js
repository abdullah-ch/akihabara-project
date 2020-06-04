const mongoose = require("mongoose");

const schemaManga = new mongoose.Schema({
  mangaName: {
    type: String,
    required: true,
  },

  mangaAuthor: {
    type: String,
    required: true,
  },

  mangaRating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Mangas = mongoose.model("Mangas", schemaManga);
module.exports.Mangas = Mangas;
