import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteMoovie, getMoovie } from "../actions/moovieActions";

const Moovie = props => {
  const viewMoovieInfo = moovieId => {
    props.history.push(`/info/${moovieId}`);
  };

  const deleteMoovie = moovieId => {
    props.deleteMoovie(moovieId);
  };

  return (
    <Card className="m-2 bg-light" style={{ width: "18rem", height: "12rem" }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.moovie["Title"]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.moovie["Release Year"]}
        </Card.Subtitle>

        <div className="mt-auto d-flex justify-content-around">
          <Button
            variant="info"
            onClick={() => {
              viewMoovieInfo(props.moovie["_id"]);
            }}
          >
            Info
        </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteMoovie(props.moovie["_id"]);
            }}
          >
            Delete
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

Moovie.propTypes = {
  moovie: PropTypes.object.isRequired

};

export default connect(null, { deleteMoovie, getMoovie })(withRouter(Moovie));
