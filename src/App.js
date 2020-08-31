import React from 'react';
import Row from './Rows/Row';

function App() {
  return (
    <div className="App">
      <h1>Cloning Netflix...</h1>
      <Row title="Netflix Original"/>
      <Row title="Trending Now"/>
      <Row title="Top Rated"/>
      <Row title="Action Movies"/>
      <Row title="Comedy"/>
      <Row title="Horror Movies"/>
      <Row title="Romance"/>
      <Row title="Documentaries"/>
    </div>
  );
}

export default App;
