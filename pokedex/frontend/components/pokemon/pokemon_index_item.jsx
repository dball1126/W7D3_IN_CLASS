import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const pokemonItem = ({pokemon}) => {
    return (
        <Link to='/pokemon/:pokemonId' >
        <li>
            <h3> {pokemon.name} </h3>
            <img src={pokemon.image_url} />
        </li>
        </Link>
    );
};

export default pokemonItem;