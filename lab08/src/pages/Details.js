import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = (props) => {
  const location = useLocation();
  const { movieId } = useParams();
  console.log("movieId = " + movieId);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // 응답이 올때까지 await 에서 기다렸다가 아래 코드를 실행
      try {
        const response = await axios.get(
          "https://yts.mx/api/v2/movie_details.json?movie_id=" + movieId,
        );

        console.log(response.data);

        setMovie(response.data.data.movie);
        console.log("movie id :" + movieId);
        console.log("movie :" + movie);
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
      <img src={movie.background_image} />
      <h5>{movie.title}</h5>
      <h5>{movie.year}</h5>
      <h5>{movie.like_count}</h5>
      <h5>{movie.url}</h5>
    </div>
  );
};

export default Details;
