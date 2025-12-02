const axios = require("axios");

const OMDB_BASE_URL = "https://www.omdbapi.com/";
const OMDB_API_KEY = process.env.OMDB_API_KEY;

// GET /api/search?title=...
const searchMovies = async (req, res) => {
  const title = req.query.title;

  // if no title, returns 400
  if (!title) {
    return res.status(400).json({
      error: "Missing required query parameter: title",
    });
  }
  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        apikey: OMDB_API_KEY,
        s: title,
      },
    });

    // return the movie list as json
    return res.json(response.data);
  } catch (error) {
    console.error("Error in searchMovies:", error.message);

    // on failure, return a 500 response with error message
    return res.status(500).json({
      error: "Failed to search movies",
    });
  }
};

// GET /api/movies/:id
const getMovieDetails = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        apikey: OMDB_API_KEY,
        i: id,
      },
    });

    // return full movie deets as json
    return res.json(response.data);
  } catch (error) {
    console.error("Error in getMovieDetails:", error.message);

    // return a 500 response w error message
    return res.status(500).json({
      error: "Failed to fetch movie details",
    });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};
