// models/movieModel.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  genre: { type: String, required: true },
  tags: { type: [String], required: true },
  description: { type: String, required: true },
  tomatoRatings: { type: Number, required: true },
  audienceRatings: { type: Number, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
