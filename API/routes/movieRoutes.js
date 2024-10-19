// routes/movieRoutes.js
const express = require("express");
const Movie = require("../models/movieModel");
const router = express.Router();

// GET all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET a random movie by genre
router.get("/random", async (req, res) => {
  const { genre } = req.query;

  try {
    if (!genre) {
      return res.status(400).json({ message: "Genre is required" });
    }

    const movies = await Movie.find({ genre });

    if (movies.length === 0) {
      return res
        .status(404)
        .json({ message: "No movies found for this genre" });
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    res.json(randomMovie);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
