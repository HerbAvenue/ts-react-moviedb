import "bootstrap/dist/css/bootstrap.css";
import "./moviecard.css";

interface Props {
  title: String;
  overview: String;
  releaseDate: String;
  posterPath: String;
}

function MovieCard({ title, overview, releaseDate, posterPath }: Props) {
  return (
    <div className="movie-card container-sm my-3 px-5 border border-dark rounded-4">
      <div className="row my-3">
        <h3>{title}</h3>
      </div>
      <div className="row">
        <div className="col">
          <img
            src={`https://image.tmdb.org/t/p/w154/${posterPath}`}
            alt="Movie Poster"
          />
          <p>
            <strong>Release Date:</strong> {releaseDate}
          </p>
        </div>
        <div className="col d-flex align-items-center">
          <p >{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
