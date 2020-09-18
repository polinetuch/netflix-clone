import React from 'react';
import Row from './Rows/Row';
import request from './Request/request';
import Nav from './Nav/Nav';
import Banner from './Banner/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINAL" isLargeRow={true} fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
