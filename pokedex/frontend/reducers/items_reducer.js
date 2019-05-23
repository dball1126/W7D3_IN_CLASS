import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SINGLE_POKEMON: 
            const { items } = action;
            return items;
        default:    
            return state;
    }
};

export default itemsReducer;