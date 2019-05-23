import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_POKEMON:
            return merge({}, oldState, action.pokemon);
        case RECEIVE_SINGLE_POKEMON:
            // debugger
            return merge({}, oldState, {[action.pokemon.id]: action.pokemon});
        default:
            return state;
        }
};

export default pokemonReducer; 