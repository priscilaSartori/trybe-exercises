import React from 'react';
import Pokedex from './Pokedex';
import pokemonList from './data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex pokemonList={ pokemonList } />
      </div>
    );
  }
}

export default App;
