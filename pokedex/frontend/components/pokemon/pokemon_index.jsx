import React from 'react';
import { requestAllPokemon } from "../../actions/pokemon_actions";
import PokemonIndexItem from "./pokemon_index_item";
import PokemonDetail from '../../components/pokemon/pokemon_detail_container';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
       const {requestAllPokemon} = this.props;
       requestAllPokemon();
    }

    render() {
        const { pokemon } = this.props;
    const pokemonItems = pokemon.map( poke => {<PokemonIndexItem key={poke.id} pokemon={poke} />};

        return (
            <div className="pokedex">
                <h1> All Pokemon </h1> 
                <ul>
                    {pokemonItems}
                    
                </ul>
            </div>
        )

    }
}

export default PokemonIndex;