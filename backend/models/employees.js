const mongoose = require("mongoose");

const schemaEmployee = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },

  empSalaray: {
    type: Number,
    required: true,
  },

  dateOfBirth: {
    type: String,
    required: true,
  },

  empPhoneNumber: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
});

const Employees = mongoose.model("Employees", schemaEmployee);
module.exports.Employees = Employees;
