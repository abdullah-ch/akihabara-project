const express = require("express");
const { Animes } = require("../models/anime");

const router = express.Router();

router.get("/", async (req, res) => {
    const anime = await Anime.find();
    console.log(anime);

    return res.send(anime);
});

router.post("/add", async (req, res) => {
    console.log("Working");

    var anime = new Anime({
        animeName: req.body.animeName,
        animeStudio: req.body.animeStudio,
        animeDirector: req.body.animeDirector,
        rating: req.body.rating,
        genre: req.body.genre,
        price: req.body.price,
    });

    anime = await anime.save();
    console.log(anime);
    return res.send(anime);
});

router.put("/edit/:id", async (req, res) => {
    var anime = await Anime.findById(req.params.id);
    if (!anime)
        return res.status(404).send(`Bro, we dont have any anime of such Id..`);

    anime.set({
        animeName: req.body.animeName,
        animeStudio: req.body.animeStudio,
        animeDirector: req.body.animeDirector,
        rating: req.body.rating,
        genre: req.body.genre,
        price: req.body.price,
    });

    anime = await anime.save();
    console.log(anime);
    return res.send(anime);
});

router.delete("/delete/:id", async (req, res) => {
    var anime = await Anime.deleteOne({ _id: req.params.id });
    if (!anime) return res.status(404).send("ID not found");
    console.log(anime);

    return res.send(anime);
});

module.exports = router;
