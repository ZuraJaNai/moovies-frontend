import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const Moovie = ({ moovie, deleteMoovie, viewMoovieInfo }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <p onClick={() => { deleteMoovie(moovie["_id"]) }}>X</p>
                <Card.Title>{moovie["Title"]}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{moovie["Release Year"]}</Card.Subtitle>
                <Card.Text>
                    Short description
                    </Card.Text>

                <Button variant="info" onClick={() => { viewMoovieInfo(moovie["_id"]) }}>Info</Button>
            </Card.Body>
        </Card>
    );
}


export default Moovie;