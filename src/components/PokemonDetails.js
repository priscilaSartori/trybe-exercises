import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';

class PokemonDetails extends Component {
  render() {
    const {
      pokemons,
      match: {
        params: { id },
      },
    } = this.props;

    const pokemonFound = pokemons.find((pok) => pok.id === Number(id));

    return (
      <h1>
        {`${pokemonFound.name} details`}
      </h1>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonDetails;
