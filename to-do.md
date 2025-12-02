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

- [ ] Create an Express router instance.
- [ ] Import controller functions from `movieController.js`.
- [ ] Define the `GET /search` route for movie searches.
- [ ] Define the `GET /movies/:id` route for movie details.
- [ ] Export the router.

---

## Task 6 — Implement Controller Logic (`controllers/movieController.js`)

### `searchMovies`

- [ ] Read the movie title from the query parameter `title`.
- [ ] If no title is provided, return a 400 response with a JSON error message.
- [ ] Call the OMDb API using the search parameter `s` and your API key.
- [ ] Return the OMDb movie list as JSON.
- [ ] Wrap logic in `try...catch` to handle errors.
- [ ] On failure, return a 500 response with an error message.

### `getMovieDetails`

- [ ] Read the IMDb ID from the route parameter `id`.
- [ ] Call the OMDb API using the ID parameter `i` and your API key.
- [ ] Return the full movie details as JSON.
- [ ] Wrap logic in `try...catch` to handle errors.
- [ ] On failure, return a 500 response with an error message.

---

## Task 7 — Security & Configuration

- [ ] Confirm API key is stored in `.env` under `OMDB_API_KEY=...`.
- [ ] Confirm `.gitignore` includes:
  - [ ] `node_modules/`
  - [ ] `.env`
- [ ] Ensure no API key is hard-coded anywhere in the project.

---

## Task 8 — Test Endpoints

- [ ] Start the server.
- [ ] Test the movie search endpoint: `/api/search?title=batman`.
- [ ] Test the movie details endpoint: `/api/movies/<IMDb ID>`.
- [ ] Verify missing `title` returns a 400 JSON error.
- [ ] Verify valid requests return JSON movie data.
- [ ] Verify unexpected errors return a 500 JSON error.

---

## Task 9 — Submission

- [ ] Commit the project files (excluding `.env`).
- [ ] Push the repository to GitHub.
- [ ] Verify the repository contains:
  - [ ] `server.js`
  - [ ] `routes/`
  - [ ] `controllers/`
- [ ] Submit the GitHub repository link.

```

```
