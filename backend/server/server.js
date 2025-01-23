//Initalizes express server
const express = require("express");
const app = express();

//Initializes cors (cross origin communication (I.E React front-end to NodeJS back-end)
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

//Express.JS Route to define back-end functions.
app.get("/api", (req, res) => {
  const popMoviesUrl =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2JlNDYzNjJmNDVjZDdiN2FjZjRmNjMwYWZjMDM3NCIsIm5iZiI6MTUwMjEzNTU5OS4zMTUsInN1YiI6IjU5ODhjNTJkOTI1MTQxNGMwNDAwMTlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GKZO7LNj2wUe2urUZ-QI0-UFW2HvmdH3Z8AfXdsgKio",
    },
  };

  //Fetches popular movies data
  fetch(popMoviesUrl, options)
    .then((res) => res.json())
    .then((data) => {
      const movies = data.results;
      res.json(movies);
    })
    .catch((err) => console.error(err));
});

//Starts Express.JS server and waits for requests at a specific port.
app.listen(8080, () => {
  console.log("Server started on port 8080.");
});
