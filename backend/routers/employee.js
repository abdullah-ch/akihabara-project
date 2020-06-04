const mongoose = require("mongoose");
const express = require("express");
const { Employees } = require("../models/employees");

const router = express.Router();

router.get("/", async (req, res) => {
    const employee  = await Employees.find();
    console.log(employee);

    return res.send(employee);
});

router.post("/add", async (req, res) => {
    console.log("Working");

    var employee = new Employees({
        empName: req.body.empName,
        empSalaray: req.body.empSalaray,
        dateOfBirth: req.body.dateOfBirth,
        empPhoneNumber: req.body.empPhoneNumber,
        address: req.body.address,
    });

    employee = await employee.save();
    console.log(employee);
    return res.send(employee);
});

router.put("/edit/:id", async (req, res) => {
    var employee = await Employees.findById(req.params.id);
    if (!employee)
        return res.status(404).send(`Bro, we dont have any customer of such Id..`);

    employee.set({
        empName: req.body.empName,
        empSalaray: req.body.empSalaray,
        dateOfBirth: req.body.dateOfBirth,
        empPhoneNumber: req.body.empPhoneNumber,
        address: req.body.address,
    });

    employee = await employee.save();
    console.log(employee);
    return res.send(employee);
});

router.delete("/delete/:id", async (req, res) => {
    var employee = await Employees.deleteOne({ _id: req.params.id });
    if (!employee) return res.status(404).send("ID not found");
    console.log(employee);

    return res.send(employee);
});

module.exports = router;