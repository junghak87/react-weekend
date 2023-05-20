import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = (props) => {
  const location = useLocation();
  const { movieId } = useParams();
  console.log("movieId = " + movieId);

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  // useEffect가 없으면 계속 호출이 발생된다.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: {
            data: { movie },
          },
        } = await axios.get(
          "https://yts.mx/api/v2/movie_details.json?movie_id=" + movieId,
        );

        setMovie(movie);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response) console.log(error.response.status);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Details</h1>
      {loading ? (
        "loading..."
      ) : (
        <div>
          <img src={movie.background_image} />
          <h5>{movie.title}</h5>
          <h5>{movie.year}</h5>
          <h5>{movie.like_count}</h5>
          <h5>{movie.url}</h5>
        </div>
      )}
    </div>
  );
};

export default Details;
