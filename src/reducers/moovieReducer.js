import { SET_MOOVIES, ADD_MOOVIE, DEL_MOOVIE, SET_MOOVIE_INFO } from "../actions/types";
const initialState = {
  list: [],
  moovieInfo: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MOOVIES:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_MOOVIE:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    case DEL_MOOVIE:
      const index = state.list.findIndex(moovie => moovie["_id"] === action.payload);
      console.log(action.payload)
      console.log(index)
      return {
        ...state,
        list: [...state.list.slice(0, index),
        ...state.list.slice(index + 1)],
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