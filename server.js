const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("OMDb API Loaded:", !!process.env.OMDB_API_KEY);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
