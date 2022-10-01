import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import pokemonListData from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemonList: pokemonListData,
    };
  }

  render() {
    const { pokemonList } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Pokedex pokemonList={ pokemonList } />
            ) }
          />
          <Route path="/about" component={ About } />
        </Switch>
      </div>
    );
  }
}

export default App;
