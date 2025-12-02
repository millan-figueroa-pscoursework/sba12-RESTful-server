# Movie Finder API — Project To-Do List

---

## Task 3 — Application Structure

- [x] Create a `server.js` file in the project root.
- [x] Create a `routes/` directory.
  - [x] Inside it, create `movieRoutes.js`.
- [x] Create a `controllers/` directory.
  - [x] Inside it, create `movieController.js`.

---

## Task 4 — Build the Server (`server.js`)

- [x] Load environment variables using dotenv.
- [x] Import Express and the movie routes file.
- [x] Initialize an Express application instance.
- [x] Choose a listening port (e.g., 3001).
- [x] Mount all movie routes under the `/api` prefix.
- [x] Start the server and log a startup message.

---

## Task 5 — Create the Routes (`routes/movieRoutes.js`)

- [x] Create an Express router instance.
- [x] Import controller functions from `movieController.js`.
- [x] Define the `GET /search` route for movie searches.
- [x] Define the `GET /movies/:id` route for movie details.
- [x] Export the router.

---

## Task 6 — Implement Controller Logic (`controllers/movieController.js`)

### `searchMovies`

- [x] Read the movie title from the query parameter `title`.
- [x] If no title is provided, return a 400 response with a JSON error message.
- [x] Call the OMDb API using the search parameter `s` and your API key.
- [x] Return the OMDb movie list as JSON.
- [x] Wrap logic in `try...catch` to handle errors.
- [x] On failure, return a 500 response with an error message.

### `getMovieDetails`

- [x] Read the IMDb ID from the route parameter `id`.
- [x] Call the OMDb API using the ID parameter `i` and your API key.
- [x] Return the full movie details as JSON.
- [x] Wrap logic in `try...catch` to handle errors.
- [x] On failure, return a 500 response with an error message.

---

## Task 7 — Security & Configuration

- [x] Confirm API key is stored in `.env` under `OMDB_API_KEY=...`.
- [x] Confirm `.gitignore` includes:
  - [x] `node_modules/`
  - [x] `.env`
- [x] Ensure no API key is hard-coded anywhere in the project.

---

## Task 8 — Test Endpoints

- [x] Start the server.
- [x] Test the movie search endpoint: `/api/search?title=batman`.
- [x] Test the movie details endpoint: `/api/movies/<IMDb ID>`.
- [x] Verify missing `title` returns a 400 JSON error.
- [x] Verify valid requests return JSON movie data.
- [x] Verify unexpected errors return a 500 JSON error.

---

## Task 9 — Submission

- [x] Commit the project files (excluding `.env`).
- [x] Push the repository to GitHub.
- [x] Verify the repository contains:
  - [x] `server.js`
  - [x] `routes/`
  - [x] `controllers/`
- [x] Submit the GitHub repository link.

```

```
