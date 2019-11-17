import React from "react";
import PropTypes from "prop-types";
import Moovie from "./Moovie";

const MooviesList = ({ moovies }) => {
  const list = moovies.map(moovie => {
    return <Moovie key={moovie["_id"]} moovie={moovie} />;
  });

  return <div>{list}</div>;
};

MooviesList.propTypes = {
  moovies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      "Release Year": PropTypes.string,
      Format: PropTypes.string,
      Stars: PropTypes.string
    })
  ).isRequired
};


export default MooviesList;
