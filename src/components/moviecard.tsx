interface Props {
  title: String;
  overview: String;
  releaseDate: String;
}

function MovieCard({ title, overview, releaseDate }: Props) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <p>{overview}</p>
      <p>
        <strong>Release Date:</strong> {releaseDate}
      </p>
    </div>
  );
}

export default MovieCard;
