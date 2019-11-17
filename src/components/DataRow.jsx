import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const DataRow = ({ header, value }) => {
    return (
        <Row className="p-2 border border-dark">
            <Col className="col-4 p-2">{header}</Col>
            <Col className="col-8 p-2">{value}</Col>
        </Row>
    );
}

DataRow.propTypes = {
    header: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};


export default DataRow;