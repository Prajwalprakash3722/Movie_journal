const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const routes = require("./routes/index");
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3001;
mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/movie_journal",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use(routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
