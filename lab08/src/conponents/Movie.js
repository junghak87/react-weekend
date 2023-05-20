import "./Movie.css";

const Movie = ({ id, title, year, rating, genres, summary, poster }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__rating">{rating}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p>{summary.slice(0, 200)}</p>
      </div>
    </div>
  );
};

export default Movie;
