const express = require("express");
const { Mangas } = require("../models/manga");

const router = express.Router();

router.get("/", async (req, res) => {
    const manga = await Mangas.find();
    console.log(manga);

    return res.send(manga);
});

router.post("/add", async (req, res) => {
    console.log("Working");

    var manga = new Mangas({
        mangaName: req.body.mangaName,
        mangaAuthor: req.body.mangaAuthor,
        mangaRating: req.body.mangaRating,
        price: req.body.price,
    });

    manga = await manga.save();
    console.log(manga);
    return res.send(manga);
});

router.put("/edit/:id", async (req, res) => {
    var manga = await Mangas.findById(req.params.id);
    if (!manga)
        return res.status(404).send(`Bro, we dont have any manga of such Id..`);

    manga.set({
        mangaName: req.body.mangaName,
        mangaAuthor: req.body.mangaAuthor,
        mangaRating: req.body.mangaRating,
        price: req.body.price,
    });

    manga = await manga.save();
    console.log(manga);
    return res.send(manga);
});

router.delete("/delete/:id", async (req, res) => {
    var manga = await Mangas.deleteOne({ _id: req.params.id });
    if (!manga) return res.status(404).send("ID not found");
    console.log(manga);

    return res.send(manga);
});

module.exports = router;
