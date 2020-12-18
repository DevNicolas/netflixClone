import React, { useEffect, useState } from "react";

import ServiceInteractor from "../api/ServiceInteractor";
import ServiceFactory from "../api/ServiceFactory";

import "../styles/banner.css";

const Interactor = new ServiceInteractor();
const base_urlImages = "https://image.tmdb.org/t/p/original";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Interactor.getMovies(
        ServiceFactory.fetchNetflixOriginals
      );
      setMovie(
        response.results[
          Math.floor(Math.random() * response.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_urlImages}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
