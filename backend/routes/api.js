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

// router.get("movies", auth, (req, res) => {
//   const movies = Movie.find();
// });

module.exports = router;
