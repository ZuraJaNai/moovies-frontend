import axios from "axios";
import { SET_MOOVIES, ADD_MOOVIE, DEL_MOOVIE, SET_MOOVIE_INFO } from "./types";

export const initializeMoovies = () => dispatch => {
    return updateMoovies(dispatch);
};

export const addMoovie = data => dispatch => {
    axios
        .post("/moovies", data)
        .then(res => {
            dispatch({
                type: ADD_MOOVIE,
                payload: res.data,
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export const deleteMoovie = moovieId => dispatch => {
    axios
        .delete(`/moovies/${moovieId}`)
        .then(res => {
            dispatch({
                type: DEL_MOOVIE,
                payload: res.data["_id"],
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
            return new Promise((resolve) => {
                dispatch({
                    type: SET_MOOVIE_INFO,
                    payload: res.data,
                });
                resolve();
            });

        })
        .catch(err => {
            console.log("err in getTasks " + err);
        });
}
export const updateMoovies = dispatch => {
    return getMoovies().then(moovies => {
        dispatch(setMoovies(moovies));
    });
};

const getMoovies = () => {
    return axios
        .get("/moovies")
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log("err in getTasks " + err);
        });
};

const setMoovies = moovies => {
    return {
        type: SET_MOOVIES,
        payload: moovies,
    };
};