import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMoovie, getMoovie } from "../actions/moovies";
import Moovie from "./Moovie";

class Board extends Component {
    viewMoovieInfo = (moovieId) => {
        this.props.history.push(`/info/${moovieId}`);
    }

    deleteMoovie = (moovieId) => {
        this.props.deleteMoovie(moovieId);
    }

    render() {
        const list = this.props.moovies.map(moovie => {
            return <Moovie
                key={moovie["_id"]}
                moovie={moovie}
                deleteMoovie={this.deleteMoovie}
                viewMoovieInfo={this.viewMoovieInfo}
            />
        })
        return (
            <div>
                {list}
            </div>
        );
    }
}

Board.propTypes = {
    moovies: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "Title": PropTypes.string.isRequired,
        "Release Year": PropTypes.string,
        "Format": PropTypes.string,
        "Stars": PropTypes.string,
    })).isRequired,
    deleteMoovie: PropTypes.func.isRequired,
    getMoovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    moovies: state.moovies.list
});

export default connect(mapStateToProps, { deleteMoovie, getMoovie })(Board);