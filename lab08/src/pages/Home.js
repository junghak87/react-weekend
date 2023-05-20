import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../conponents/Movie";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const movieImageUrl =
    "https://www.pngitem.com/pimgs/m/338-3389140_movie-channel-logo-png-png-download-movie-channel.png";

  useEffect(() => {
    // async-awit 를 사용한 axios 사용법
    // async 비동기 호출

    const fetchData = async () => {
      // 응답이 올때까지 await 에서 기다렸다가 아래 코드를 실행
      try {
        const response = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
        );
        setMovies(response.data.data.movies);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response) console.log(error.response.status);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        "Loding..."
      ) : (
        <div>
          <div>
            <img src={movieImageUrl} width="100%" />
          </div>
          <div className="movies">
            {movies.map((movie, index) => (
              <Link
                key={movie.id + index}
                to={`/movie-detail/${movie.id}`}
                state={{ id: movie.id }}
              >
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  year={movie.year}
                  genres={movie.genres}
                  summary={movie.summary}
                  rating={movie.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
