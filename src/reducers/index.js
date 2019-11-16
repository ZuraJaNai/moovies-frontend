
import { combineReducers } from "redux";
import moovieReducer from "./moovieReducer"
const rootReducer = combineReducers({
    moovies: moovieReducer,
});

export default rootReducer;