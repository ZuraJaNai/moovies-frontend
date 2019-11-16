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

Moovie.propTypes = {
    moovie: PropTypes.objectOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "Title": PropTypes.string.isRequired,
        "Release Year": PropTypes.string,
        "Format": PropTypes.string,
        "Stars": PropTypes.string,
    })).isRequired,
    deleteMoovie: PropTypes.func.isRequired,
    viewMoovieInfo: PropTypes.func.isRequired
};


export default Moovie;