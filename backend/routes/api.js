const express = require("express");
const User = require("../models/UserSchema");
const Movie = require("../models/MovieSchema");
const router = express.Router();
var auth = require("../middleware/Auth");
router.use("/auth", require("./auth"));

router.get("/", (req, res) => {
  res.json({ message: "Working Perfectly Lol!!" });
});

router.get("/user", auth, (req, res, next) => {
  const _id = req.user["id"];
  const user = User.find({ _id: _id }, (err, user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "No User Found" });
    }
  });
});

router.get("/users", auth, (req, res, next) => {
  const _id = req.user["id"];
  if (_id === process.env.ADMIN_ID) {
    const users = User.find((err, users) => {
      if (users) {
        res.status(200).json(users);
        return 1;
      } else {
        res.status(401).json({ message: "No Users Found" });
        return 0;
      }
    });
  }
});

router.get("/movies", auth, (req, res) => {
  const _id = req.user["id"];
  const movies = Movie.find({ userId: _id }, (err, movies) => {
    if (movies) {
      res.status(200).json(movies);
    } else {
      res.status(401).json({ message: "No Movies Found" });
    }
  });
});

router.post("/movies", auth, async (req, res) => {
  const userId = req.user["id"];
  const { title, year, rating, review, genre, watched } = await req.body;
  const movie = new Movie({
    title,
    genre,
    year,
    rating,
    review,
    watched,
    userId,
  });
  await movie.save((err, movie) => {
    if (movie) {
      res.status(200).json({ message: "Movie Added Successfully" });
    } else {
      res.status(500).json({ message: "Movie not saved" });
    }
  });
});

module.exports = router;
