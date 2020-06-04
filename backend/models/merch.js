const mongoose = require("mongoose");

// Creating a Schema

const schemaMerch = new mongoose.Schema({
  merchName: {
    type: String,
    required: true,
  },

  merchType: {
    type: String,
    required: true,
  },

  price: {
    type: number,
    required: true,
  },
});

// Modeling a Class on my Schema

const Merch = mongoose.model("Merch", schemaMerch);

module.exports.Merch = Merch;
