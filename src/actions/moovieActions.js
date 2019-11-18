import axios from "axios";
import { SET_MOOVIES, ADD_MOOVIE, DEL_MOOVIE, SET_MOOVIE_INFO } from "./types";

export const initializeMoovies = () => dispatch => {
  return updateMoovies(dispatch);
};

export const addMoovie = data => dispatch => {
  return axios
    .post("/moovies", data)
    .then(res => {
      return new Promise(resolve => {
        dispatch({
          type: ADD_MOOVIE,
          payload: res.data
        });
        resolve(true);
      });
    })
    .catch(err => {
      if (err.response.status == "409") {
        return new Promise(resolve => {
          resolve(false);
        });
      } else {
        console.log(err);
      }
    });
};

export const deleteMoovie = moovieId => dispatch => {
  return axios
    .delete(`/moovies/${moovieId}`)
    .then(res => {
      return new Promise(resolve => {
        dispatch({
          type: DEL_MOOVIE,
          payload: res.data["_id"]
        });
        resolve();
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getMoovie = moovieId => dispatch => {
  return axios
    .get(`/moovies/${moovieId}`)
    .then(res => {
      dispatch({
        type: SET_MOOVIE_INFO,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("err in getMoovie " + err);
    });
};

export const getSortedMoovies = () => dispatch => {
  return axios
    .get("/moovies/sorted")
    .then(res => {
      return new Promise(resolve => {
        dispatch({
          type: SET_MOOVIES,
          payload: res.data
        });
        resolve();
      });
    })
    .catch(err => {
      console.log("err in getSortedMoovies " + err);
    });
};

export const refreshMoovies = () => dispatch => {
  return updateMoovies(dispatch);
}

const updateMoovies = dispatch => {
  return getMoovies().then(moovies => {
    dispatch({
      type: SET_MOOVIES,
      payload: moovies
    });
  });
};

const getMoovies = () => {
  return axios
    .get("/moovies")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log("err in getMoovies " + err);
    });
};
