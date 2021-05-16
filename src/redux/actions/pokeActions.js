import axios from 'axios';
import { POKEMON_LIST_FAILURE, POKEMON_LIST_LOADING, POKEMON_LIST_SUCCESS, POKEMON_SINGLE_FAILURE, POKEMON_SINGLE_LOADING, POKEMON_SINGLE_SUCCESS } from './actionTypes';

export const getPokeList = (page) => async (dispatch) => {
    try {
        dispatch({
            type: POKEMON_LIST_LOADING
        });
        
        const limit = 20;
        const offset = (page * limit) - limit;

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

        dispatch({
            type: POKEMON_LIST_SUCCESS,
            payload: res.data
        });
        
    } catch (error) {
        console.log(error);

        dispatch({
            type: POKEMON_LIST_FAILURE
        });
    }
}


export const getPokeSingle = (pokeName) => async (dispatch) => {
    try {
        dispatch({
            type: POKEMON_SINGLE_LOADING,
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        dispatch({
            type: POKEMON_SINGLE_SUCCESS,
            payload: res.data,
            pokeName: pokeName
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: POKEMON_SINGLE_FAILURE,
        });
    }
}