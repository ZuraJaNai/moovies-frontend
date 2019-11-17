import axios from "axios";
import { SET_TITLE_SEARCH, SET_STAR_SEARCH } from "./types";

export const findMooviesByTitle = title => {
  return findMooviesBy("title", title, SET_TITLE_SEARCH);
};

export const findMooviesByStar = star => {
  return findMooviesBy("star", star, SET_STAR_SEARCH);
};

const findMooviesBy = (param, value, type) => dispatch => {
  return axios
    .post(`/search/${param}`, { value: value })
    .then(res => {
      return new Promise(resolve => {
        dispatch({
          type: type,
          payload: res.data
        });
        resolve();
      });
    })
    .catch(err => {
      console.log(err);
    });
};
