const express = require("express");
const { Games } = require("../models/games");

const router = express.Router();

router.get("/", async (req, res) => {
    const game = await Games.find();
    console.log(game);

    return res.send(game);
});

router.post("/add", async (req, res) => {
    console.log("Working");

    var game = new Games({
        gameName: req.body.gameName,
        gameStudio: req.body.gameStudio,
        genre: req.body.genre,
        price: req.body.price,
    });

    game = await game.save();
    console.log(game);
    return res.send(game);
});

router.put("/edit/:id", async (req, res) => {
    var game = await Games.findById(req.params.id);
    if (!game)
        return res.status(404).send(`Bro, we dont have any game of such Id..`);

    game.set({
        gameName: req.body.gameName,
        gameStudio: req.body.gameStudio,
        genre: req.body.genre,
        price: req.body.price,
    });

    game = await game.save();
    console.log(game);
    return res.send(game);
});

router.delete("/delete/:id", async (req, res) => {
    var game = await Games.deleteOne({ _id: req.params.id });
    if (!game) return res.status(404).send("ID not found");
    console.log(game);

    return res.send(game);
});

module.exports = router;
