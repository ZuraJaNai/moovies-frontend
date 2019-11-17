import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const DataRow = ({ header, value }) => {
    return (
        <Row>
            <Col className="m-2">{header}</Col>
            <Col>{value}</Col>
        </Row>
    );
}

DataRow.propTypes = {
    header: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};


export default DataRow;