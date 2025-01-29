import "bootstrap/dist/css/bootstrap.css";
import "./moviecard.css";

// interface Movie {
//   title: String;
//   overview: String;
//   releaseDate: String;
//   posterPath: String;
// }

interface Movie {
  original_title: string;
  overview: String;
  release_date: String;
  poster_path: String;
}

interface CardProps {
  movies: Movie[];
}

function MovieCard({ movies }: CardProps) {
  return (
    <div className="container-lg">
      <h1 style={{color: "white"}}>Most Popular This Week:</h1>
      <div className="row">
        {movies.slice(0, 8).map((movie) => (
          <div className="col">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Add the base URL for the poster image
              className="d-block w-100"
              alt={movie.original_title}
            />
          </div>
        ))}
      </div>
      <br />
      {/* <div className="row">
        {movies.slice(6, 12).map((movie) => (
          <div className="col">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Add the base URL for the poster image
              className="d-block w-100"
              alt={movie.original_title}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default MovieCard;
