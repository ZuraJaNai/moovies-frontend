import { SET_MOOVIES, DEL_MOOVIE } from "../actions/types";
import { stat } from "fs";
const initialState = {
  moovies: [],
  moovieInfo: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MOOVIES:
      return {
        ...state,
        moovies: action.payload,
      };
    case ADD_MOOVIE:
      return {
        ...state,
        moovies: [action.payload, ...state.moovies],
      };
    case DEL_MOOVIE:
      const index = state.moovies.findIndex(moovie => moovie["_id"] = action.payload);
      return {
        ...state,
        moovies: [...state.moovies.slice(0, index),
        ...state.moovies.slice(index + 1)],
      };
    case SET_MOOVIE_INFO:
      return {
        ...state,
        moovieInfo: action.payload,
      };
    default:
      return state;
  }
}