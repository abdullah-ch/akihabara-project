const express = require("express");
const { Customers } = require("../models/customers");

const router = express.Router();

router.get("/", async (req, res) => {
  const customer = await Customers.find();
  console.log(customer);

  return res.send(customer);
});

router.post("/add", async (req, res) => {
  console.log("Working");

  var customer = new Customers({
    cusName: req.body.cusName,
    cusPhoneNumber: req.body.cusPhoneNumber,
  });

  customer = await customer.save();
  console.log(customer);
  return res.send(customer);
});

router.put("/edit/:id", async (req, res) => {
  var customer = await Customers.findById(req.params.id);
  if (!customer)
    return res.status(404).send(`Bro, we dont have any customer of such Id..`);

  customer.set({
    cusName: req.body.cusName,
    cusPhoneNumber: req.body.cusPhoneNumber,
  });

  customer = await customer.save();
  console.log(customer);
  return res.send(customer);
});

router.delete("/delete/:id", async (req, res) => {
  var customer = await Customers.deleteOne({ _id: req.params.id });
  if (!customer) return res.status(404).send("ID not found");
  console.log(customer);

  return res.send(customer);
});

module.exports = router;
