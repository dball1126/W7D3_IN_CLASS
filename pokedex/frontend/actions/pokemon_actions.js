export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
import * as APIUtil from '../util/api_util';


export const receiveAllPokemon = (pokemon) => {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon
    };
};

export const receiveSinglePokemon = (payload) => {
    // debugger
    const { pokemon, items } = payload;
    return {
        type: RECEIVE_SINGLE_POKEMON,
        pokemon,
        items
    };
};

export const requestAllPokemon = () => (dispatch) => {
    // debugger
    return APIUtil.fetchAllPokemon().then(pokemon => {
        // debugger
      return dispatch(receiveAllPokemon(pokemon));
    });
};

export const requestPokemon = (id) => (dispatch) => {
    return APIUtil.fetchPokemon(id).then( payload => {
        return dispatch(receiveSinglePokemon(payload));
    });
};