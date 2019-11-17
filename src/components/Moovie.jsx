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
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <p
          onClick={() => {
            deleteMoovie(props.moovie["_id"]);
          }}
        >
          X
        </p>
        <Card.Title>{props.moovie["Title"]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.moovie["Release Year"]}
        </Card.Subtitle>

        <Button
          variant="info"
          onClick={() => {
            viewMoovieInfo(props.moovie["_id"]);
          }}
        >
          Info
        </Button>
      </Card.Body>
    </Card>
  );
};

export default connect(null, { deleteMoovie, getMoovie })(withRouter(Moovie));
