import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {requestPokemon, pokemon} = this.props;
        requestPokemon(pokemon.id);
    }

    render() {
        const { pokemon } = this.props;
        return (
            <> 
                <ul> 
                    <li>{pokemon.name} </li>
                    <li> {pokemon.attack}  </li>
                    <li> {pokemon.defense}  </li>
                    <li> {pokemon.poke_type}  </li>
                    <li> {pokemon.moves}  </li>
                    <img src={pokemon.image_url} />
                </ul>
            </>
        )
    }
}

export default PokemonDetail;