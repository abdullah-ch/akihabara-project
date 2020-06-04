const express = require("express");
const mongoose = require("mongoose");
const customer = require("./routers/customers");
const employee = require("./routers/employee");
const anime = require("./routers/anime");
const game = require("./routers/games");
const manga = require("./routers/mangas");
const music = require("./routers/music");
const movies = require("./routers/movies");
const merch = require("./routers/merch");

mongoose
  .connect("mongodb://localhost:27017/akihabara-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DataBase has been connected !"))
  .catch((err) => console.log("Cannot connect to database", err.message));

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // to enable calls from every domain
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  ); // allowed actiosn
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // to deal with chrome sending an extra options request
  }

  next(); // call next middlewer in line
});


app.use("/customers",customer);
app.use("/employees", employee);
app.use("/anime", anime);
app.use("/games", game);
app.use("/mangas", manga);  
app.use("/merch", merch);
app.use("/music", music);
app.use("/movies", movies);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I am listening at ${port}`);
});
