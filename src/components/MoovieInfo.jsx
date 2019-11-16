import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMoovie, getMoovie } from "../actions/moovies";
import { Container, Row } from "react-bootstrap";
import DataRow from "./DataRow";

class MoovieInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getMoovie(id);
    }

    render() {
        const { info } = this.props;
        const [title, year, format, stars, description] = ["Title", "Release Year", "Format", "Stars", "Full description"]
        return (
            <div>
                {info != null &&
                    <Container className="justify-content-md-around justify-content-sm-center">
                        <DataRow header={title} value={info[title]} />
                        <DataRow header={year} value={info[year]} />
                        <DataRow header={format} value={info[format]} />
                        <DataRow header={stars} value={info[stars]} />

                        <Row className="justify-content-center">
                            {description}
                        </Row>
                    </Container>
                }
            </div>
        );
    }
}

MoovieInfo.propTypes = {
    info: PropTypes.objectOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "Title": PropTypes.string.isRequired,
        "Release Year": PropTypes.string,
        "Format": PropTypes.string,
        "Stars": PropTypes.string,
    })),
    deleteMoovie: PropTypes.func.isRequired,
    getMoovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    info: state.moovies.moovieInfo
});

export default connect(mapStateToProps, { deleteMoovie, getMoovie })(MoovieInfo);