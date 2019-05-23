import { connect } from 'react-redux';
import { requestAllPokemon } from "../../actions/pokemon_actions";
import PokemonIndex from "./pokemon_index";

const msp = state => {
    const { pokemon } = state.entities;
    return {
        pokemon: Object.values(pokemon)
    };
};

const mdp = dispatch => { 
    return { 
        requestAllPokemon: () => dispatch(requestAllPokemon())
    };
};

export default connect(msp, mdp)(PokemonIndex);