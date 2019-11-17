import { combineReducers } from "redux";
import moovieReducer from "./moovieReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  moovies: moovieReducer,
  search: searchReducer
});

export default rootReducer;
