import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <span>
        <Link to="/">Back to Home</Link>
      </span>
      <Movie
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image}
        title={movie.title}
        summary={movie.description_full}
        genres={movie.genres}
      />
    </div>
  );
}
export default Detail;
