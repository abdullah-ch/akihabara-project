const mongoose = require("mongoose");
const express = require("express");
const { Movies } = require("../models/movies");

const router = express.Router();

router.get("/", async (req, res) => {
    const movie  = await Movies.find();
    console.log(movie);

    return res.send(movie);
});

router.post("/add", async (req, res) => {
    console.log("Working");

    var movie = new Movies({
        movieName: req.body.movieName,
        movieDirector: req.body.movieDirector,
        rating: req.body.rating,
        screenplay: req.body.screenplay,
        genre: req.body.genre,
        price: req.body.price,
    });

    movie = await movie.save();
    console.log(movie);
    return res.send(movie);
});

router.put("/edit/:id", async (req, res) => {
    var movie = await Movies.findById(req.params.id);
    if (!movie)
        return res.status(404).send(`Bro, we dont have any customer of such Id..`);

    movie.set({
        movieName: req.body.movieName,
        movieDirector: req.body.movieDirector,
        rating: req.body.rating,
        screenplay: req.body.screenplay,
        genre: req.body.genre,
        price: req.body.price,
    });

    movie = await movie.save();
    console.log(movie);
    return res.send(movie);
});

router.delete("/delete/:id", async (req, res) => {
    var movie = await Movies.deleteOne({ _id: req.params.id });
    if (!movie) return res.status(404).send("ID not found");
    console.log(movie);

    return res.send(movie);
});

module.exports = router;