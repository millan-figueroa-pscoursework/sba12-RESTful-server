const express = require("express");
const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

const router = express.Router();

// GET /api/search?title=..
router.get("/search", searchMovies);

// GET /api/movies/:id
router.get("/movies/:id", getMovieDetails);

module.exports = router;
