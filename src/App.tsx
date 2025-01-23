import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import MovieCard from "./components/moviecard";

function App() {
  //Array of movies fetched from NodeJS
  const [movies, setMovies] = useState([]);

  //Function to fetch data from NodeJS
  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setMovies(response.data); //Saves titles to state
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  //Runs fetchAPI when ready
  useEffect(() => {
    fetchAPI();
  }, []);

  //Returns template to > main.tsx > index.html
  return (
    <>
      {movies.map((movie: { original_title: string; overview: string; release_date: string }, index) => (
        <MovieCard
          key={index}
          title={movie.original_title}
          overview={movie.overview}
          releaseDate={movie.release_date}
        />
      ))}
    </>
  );
}

export default App;
