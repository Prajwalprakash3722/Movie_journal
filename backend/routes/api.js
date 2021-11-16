const { json } = require("body-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/UserSchema");
const Movie = require("../models/MovieSchema");
const jwt = require("jsonwebtoken");
const router = express.Router();
var auth = require("../middleware/Auth");
const hashpassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const comparepassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

router.get("/", (req, res) => {
  res.json({ message: "Working Perfectly Lol!!" });
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = hashpassword(password);
  const user = new User({ name, email, password: hashedPassword });
  console.log(user);
  user.save((err, user) => {
    if (err) return console.error(err);
    res.json({ message: "Document inserted successfully!" });
  });
});

// JWT verification token is just for testing purpose, Should change in Production

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) return console.error(err);
    if (!user) return res.json({ message: "User not found" });
    if (!comparepassword(password, user.password))
      return res.json({ message: "Password is incorrect" });
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({
      token: token,
    });
  });
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

router.get("movies", auth, (req, res) => {
  const movies = Movie.find();
});

module.exports = router;
