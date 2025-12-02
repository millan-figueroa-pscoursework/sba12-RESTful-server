const express = require("express");
require("dotenv").config();
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const port = 3001;

console.log("OMDb API Loaded:", !!process.env.OMDB_API_KEY);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", movieRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
