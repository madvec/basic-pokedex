import React from 'react';
import PokemonViews from './containers/PokemonViews'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Outer-Wrapper container-fluid">
        <div className="Header">
          <h1 style={{textAlign:"center"}}>This is the Pokemon App</h1>
        </div>
        <div className="Content">
          <PokemonViews></PokemonViews>
        </div>
      </div>
    </div>
  );
}

export default App;
