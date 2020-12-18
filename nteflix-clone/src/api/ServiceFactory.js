const ServiceFactory = {
  routeApi: "https://api.themoviedb.org/3",
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&languaje=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&languaje=en-US`,
  fecthActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&with_genres=10749`,
  fecthDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY_MOVIES}&with_genres=99`,
};

export default ServiceFactory;
