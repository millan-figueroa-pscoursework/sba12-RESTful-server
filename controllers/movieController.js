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
