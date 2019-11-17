import React from "react";
import PropTypes from "prop-types";
import Moovie from "./Moovie";

const MooviesList = ({ moovies }) => {
  const list = moovies.map(moovie => {
    return <Moovie key={moovie["_id"]} moovie={moovie} />;
  });

  return <div>{list}</div>;
};

export default MooviesList;
