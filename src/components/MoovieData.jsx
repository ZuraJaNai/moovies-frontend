import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import DataRow from "./DataRow";

const MoovieData = ({ headers, values }) => {
    const createRows = () => {
        let rows = []
        for (let i = 0; i <= headers.length - 1; i++) {
            rows.push(<DataRow key={i} header={headers[i]} value={values[i]} />);
        }
        return rows;
    }
    return (
        <Container className="mx-auto border border-dark justify-content-md-around justify-content-sm-center m-2">
            {createRows()}
        </Container>
    );
}

MoovieData.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    values: PropTypes.arrayOf(
        PropTypes.oneOfType(
            [PropTypes.string, PropTypes.object]
        )
    ).isRequired
};

export default MoovieData;