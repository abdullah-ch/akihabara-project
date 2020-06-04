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
    type: number,
    required: true,
  },
});

const Mangas = mongoose.model("Mangas", schemaMangas);
module.exports.Mangas = Mangas;
