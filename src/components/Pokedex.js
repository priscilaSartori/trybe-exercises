import React from 'react';
import { arrayOf } from 'prop-types';

import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={pokemonList[0]} />
          {/* {pokemonList
            .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)} */}
        </div>
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
