import React, { useEffect, useState } from "react";

import ServiceInteractor from "../api/ServiceInteractor";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

const Interactor = new ServiceInteractor();
const base_urlImages = "https://image.tmdb.org/t/p/original";

export default function Container({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailer] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await Interactor.getMovies(fetchUrl);
      setMovies(request.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const error = () => {
    toast.error("No tenemos Trailer de esta pelicula en estos momentos");
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailer("");
    } else {
      movieTrailer(movie?.name || movie?.original_title)
        .then((url) => {
          console.log(url);
          const urlParameter = new URLSearchParams(new URL(url).search);
          setTrailer(urlParameter.get("v"));
        })
        .catch((err) => {
          error();
          console.log(err);
        });
    }
  };
  return (
    <div className="row">
      <ToastContainer />
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_urlImages}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
