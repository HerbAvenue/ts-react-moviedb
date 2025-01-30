import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import axios from "axios";

function SearchResults() {
  const location = useLocation();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  useEffect(() => {
    if (searchQuery) {
      const fetchSearchResults = async () => {
        setLoading(true);
        setError("");
        try {
          const response = await axios.get("/api/search", {
            params: { query: searchQuery },
          });

          setResults(response.data);
        } catch (err) {
          setError("Error fetching search results.");
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    }
  }, [searchQuery]);

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Search Results for: {searchQuery}</h1>

        {/* Loading Indicator */}
        {loading && <p>Loading...</p>}

        {/* Error Message */}
        {error && <p>{error}</p>}

        {/* Movie Results */}
        <div className="row">
          {results && results.length > 0 ? (
            results.map((movie: any) => (
              <div className="col-md-3" key={movie.id}>
                <div className="card m-1">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="card-img-top"
                    />
                  ) : (
                    <img src={'/PosterPlaceholder.jpg'} />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
