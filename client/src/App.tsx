import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MovieCard from "./components/moviecard";
import Carousel from "./components/carousel";
import NavBar from "./components/navbar";

function App() {
  //Array of movies fetched from NodeJS
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  //Function to fetch data from NodeJS
  const fetchAPI = async () => {
    try {
      const response = await axios.get("https://react-movie-db-eac7a38d62e9.herokuapp.com/api");
      setPopularMovies(response.data.popularMovies);
      setNowPlayingMovies(response.data.nowPlayingMovies);
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
      <NavBar />
      <Carousel movies={nowPlayingMovies} />
      <MovieCard movies={popularMovies} />
    </>
  );
}

export default App;
