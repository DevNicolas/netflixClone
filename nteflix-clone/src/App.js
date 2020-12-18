import React from "react";
import "./styles/App.css";
import Container from "./components/Container";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import ServiceFactory from "./api/ServiceFactory";
function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Container
        title="NETFLIX ORIGINALS"
        fetchUrl={ServiceFactory.fetchNetflixOriginals}
        isLargeRow
      />
      <Container title="Trending Now" fetchUrl={ServiceFactory.fetchTrending} />
      <Container title="Top Rated" fetchUrl={ServiceFactory.fetchTopRated} />
      <Container
        title="Action Movies"
        fetchUrl={ServiceFactory.fecthActionMovies}
      />
      <Container
        title="Comedy Movies"
        fetchUrl={ServiceFactory.fetchComedyMovies}
      />
      <Container
        title="Horror Movies"
        fetchUrl={ServiceFactory.fetchHorrorMovies}
      />
      <Container
        title="Romance Movies"
        fetchUrl={ServiceFactory.fetchRomanceMovies}
      />
      <Container
        title="Documentaries"
        fetchUrl={ServiceFactory.fecthDocumentaries}
      />
    </div>
  );
}

export default App;
