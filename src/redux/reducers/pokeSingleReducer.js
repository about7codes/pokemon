import { POKEMON_SINGLE_FAILURE, POKEMON_SINGLE_LOADING, POKEMON_SINGLE_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: false,
    data: {},
    pokeName: '',
    errorMsg: ''
};

const pokeSingleReducer = (state=initialState, action) => {
    switch (action.type) {
        case POKEMON_SINGLE_LOADING:
            return {
                ...state,
                loading: true,
                errorMsg: '',
            };
        case POKEMON_SINGLE_FAILURE:
            return {
                ...state,
                loading: false,
                errorMsg: 'Pokemon does not exist...404'
            };
        case POKEMON_SINGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMsg: '',
                data: {
                    ...state.data,
                    [action.pokeName]: action.payload,
                },
                pokeName: action.pokeName

            };
        default:
            return state;    
    }
}

export default pokeSingleReducer;