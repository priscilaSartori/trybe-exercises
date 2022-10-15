import React from 'react';
import { arrayOf } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: '',
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.fetchFilteredPokemon = this.fetchFilteredPokemon.bind(this);
  }

  nextPokemon(listaPokemon) {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % listaPokemon,
    }));
  }

  filterPokemon(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  fetchFilteredPokemon() {
    const { pokemonList } = this.props;
    const { filteredType } = this.state;

    return pokemonList.filter((pokemon) => {
      if (filteredType === '') return true;
      return pokemon.type === filteredType;
    });
  }

  render() {
    const { pokemonIndex } = this.state;
    const filteredPokemon = this.fetchFilteredPokemon();
    const pokemon = filteredPokemon[pokemonIndex];
    return (
      <div>
        <Pokemon pokemon={ pokemon } />
        <div>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Fire') }
          >
            Fire
          </button>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Psychic') }
          >
            Psychic
          </button>
          <button
            type="button"
            onClick={ () => this.filterPokemon('') }
          >
            Todos
          </button>
        </div>
        <button
          type="button"
          onClick={ () => this.nextPokemon(filteredPokemon.length) }
        >
          Próximo pokémon
        </button>
      </div>
    );
  }
}

// Pokedex.defaultProps = {
//   pokemonList: [],
// };

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
