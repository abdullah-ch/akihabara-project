const mongoose = require("mongoose");

const schemaCustomer = new mongoose.Schema({
  cusName: {
    type: String,
    required: true,
  },

  cusPhoneNumber: {
    type: String,
    required: true,
  },
});

const Customers = mongoose.model("Customers", schemaCustomer);
module.exports.Customers = Customers;
