import { SET_TITLE_SEARCH, SET_STAR_SEARCH } from "../actions/types";
const initialState = {
  byTitle: [],
  byStar: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE_SEARCH:
      return {
        ...state,
        byTitle: action.payload
      };
    case SET_STAR_SEARCH:
      return {
        ...state,
        byStar: action.payload
      };
    default:
      return state;
  }
}
