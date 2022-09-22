import React from 'react';
import { arrayOf } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
    };
    this.nextPokemon = this.nextPokemon.bind(this);
  }
  nextPokemon() {
    this.setState((state) => ({
      pokemonIndex: state.pokemonIndex + 1,
    }));
  }
  render() {
    const { pokemonList } = this.props;
    const { pokemonIndex } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={pokemonList[pokemonIndex]} />
        </div>
        <button
          type="button"
          onClick={() => this.nextPokemon(pokemonList.length)}
        >
          Próximo pokémon
        </button>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
