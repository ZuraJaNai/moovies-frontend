
import { combineReducers } from "redux";
import moovieReducer from "./moovieReducer"
const rootReducer = combineReducers({
    movies: moovieReducer,
});

export default rootReducer;