import React from 'react';
import Row from './Rows/Row';
import request from './Request/request';

function App() {
  return (
    <div className="App">
      <h1>Cloning Netflix...</h1>
      <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={request.fetchComdeyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchComdeyMovies}/>
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
