const mongoose = require("mongoose");
const express = require("express");
const { Music } = require("../models/music");

const router = express.Router();

router.get("/", async (req, res) => {
    const music  = await Music.find();
    console.log(music);

    return res.send(music);
});

router.post("/add", async (req, res) => {
    console.log("Working");

    var music = new Music({
        musicName: req.body.musicName,
        singer: req.body.singer,
        releaseYear: req.body.releaseYear,
        price: req.body.price,
    });

    music = await music.save();
    console.log(music);
    return res.send(music);
});

router.put("/edit/:id", async (req, res) => {
    var music = await Music.findById(req.params.id);
    if (!music)
        return res.status(404).send(`Bro, we dont have any customer of such Id..`);

    music.set({
        musicName: req.body.musicName,
        singer: req.body.singer,
        releaseYear: req.body.releaseYear,
        price: req.body.price,
    });

    music = await music.save();
    console.log(music);
    return res.send(music);
});

router.delete("/delete/:id", async (req, res) => {
    var music = await Music.deleteOne({ _id: req.params.id });
    if (!music) return res.status(404).send("ID not found");
    console.log(music);

    return res.send(music);
});

module.exports = router;