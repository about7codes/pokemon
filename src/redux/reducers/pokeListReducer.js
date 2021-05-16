import { POKEMON_LIST_LOADING, POKEMON_LIST_FAILURE, POKEMON_LIST_SUCCESS } from '../actions/actionTypes';

const initialState = {
    loading: false,
    data: [],
    count: 0,
    errorMsg: ''
};

const pokeListReducer = (state=initialState, action) => {
    switch (action.type) {
        case POKEMON_LIST_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: ''
            };
        case POKEMON_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMsg: 'No pokemons found 404...',
            };
        case POKEMON_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                count: action.payload.count,
                errorMsg: '',
            };
        default:
            return state;    
    }
}

export default pokeListReducer;