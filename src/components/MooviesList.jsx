import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Moovie from "./Moovie";

const MooviesList = ({ moovies }) => {
  const list = moovies.map(moovie => {
    return <Col key={moovie["_id"]} className="d-flex justify-content-center"><Moovie moovie={moovie} /></Col>;
  });

  return (
    <Container className="fluid justify-content-around">
      <Row>
        {list}
      </Row>
    </Container>
  );
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
