const mongoose = require("mongoose");
const express = require("express");
const { Merch } = require("../models/merch");

const router = express.Router();

router.get("/", async (req, res) => {
    const merch  = await Merch.find();
    console.log(merch);

    return res.send(merch);
});

router.post("/add", async (req, res) => {
    console.log("Working");

    var merch = new Merch({
        merchName: req.body.merchName,
        merchType: req.body.merchType,
        price: req.body.price,
    });

    merch = await merch.save();
    console.log(merch);
    return res.send(merch);
});

router.put("/edit/:id", async (req, res) => {
    var merch = await Merch.findById(req.params.id);
    if (!merch)
        return res.status(404).send(`Bro, we dont have any customer of such Id..`);

    merch.set({
        merchName: req.body.merchName,
        merchType: req.body.merchType,
        price: req.body.price,
    });

    merch = await merch.save();
    console.log(merch);
    return res.send(merch);
});

router.delete("/delete/:id", async (req, res) => {
    var merch = await Merch.deleteOne({ _id: req.params.id });
    if (!merch) return res.status(404).send("ID not found");
    console.log(merch);

    return res.send(merch);
});

module.exports = router;