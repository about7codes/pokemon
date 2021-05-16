import { combineReducers } from "redux";
import pokeListReducer from "./pokeListReducer";
import pokeSingleReducer from './pokeSingleReducer';

const rootReducer = combineReducers({
    pokeList: pokeListReducer,
    pokeSingle: pokeSingleReducer,
});

export default rootReducer;