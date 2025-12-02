# 🎬 Movie Finder API

A simple RESTful backend service that fetches movie information from the OMDb API and returns clean JSON responses. This project is designed to demonstrate basic backend development skills such as routing, controller architecture, API calls, configuration security, and error handling.
<br><br>

## 📦 Features

- Search for movies by title
- Fetch detailed movie information by IMDb ID
- Clean, structured JSON responses
- No stored data — all movie data is fetched from OMDb
- Proper project organization (routes + controllers)
- Environment variable support for API keys
  <br><br>

---

## 🛠️ Tech Stack

Node.js <br>
Express <br>
Axios <br>
dotenv <br>
<br><br>

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <repo-url>
cd movie-finder-api
```

<br>

### 2️⃣ Install Dependencies

```bash
npm install
```

<br>

### 3️⃣ Environment Setup

```bash
OMDB_API_KEY=your_key_here
```

#### Do NOT commit your .env file.

#### Make sure .env is listed inside .gitignore.

<br>

### 📁 Project Structure

movie-finder-api/<br>
├── controllers/<br>
│ └── movieController.js<br>
├── routes/<br>
│ └── movieRoutes.js<br>
├── .gitignore<br>
├── .env (not in repo)<br>
├── package.json<br>
└── server.js<br>

<br>

### 📡 API Endpoints

#### 🔹 Search Movies

Search by movie title

```bash
/api/search?title=batman
```

<br>

#### Response:

A list of matching movies as returned by OMDb.

#### 🔹 Get Movie Details

```bash
/api/movies/tt0372784
```

#### Response:

Full JSON movie object (cast, ratings, plot, etc.).

<br><br>

---

## 🛑 Error Handling

The API is designed to return clear status codes and JSON error messages:

**❗ Missing Title Parameter**

If `/api/search` is requested without a `title` query parameter, the server will return:

```json
{ "error": "Please provide a movie title." }
```

<b>Status:</b> 400 Bad Request

<br>

**❗ Unexpected Server Errors**
Any failure while calling OMDb or processing requests will return:

```json
{ "error": "Something went wrong." }
```

<b>Status:</b> 500 Internal Server Error

<br><br>

---

## 🔒 Environment & Security

Store your API key securely in the .env file:

```json
OMDB_API_KEY=your_api_key_here
```

#### Do not hard-code credentials anywhere in your codebase.

Ensure `.gitignore` contains:

- node_modules/

- .env

## <br><br>

## 🧪 Testing the API

Use a browser, Postman, Thunder Client, or curl:

### 🔍 Search Movies

`GET /api/search?title=batman`

### 🎞️ Movie Details

`GET /api/movies/tt0372784`

<br>

### Expected Behavior Checklist

- ✔️ Valid search returns JSON movie list

- ✔️ Valid movie ID returns full detailed JSON

- ✔️ Missing title returns a 400 JSON error

- ✔️ Unexpected errors return a 500 JSON error
