import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MooviesList from "./MooviesList";

class Board extends Component {
  render() {
    return (
      <MooviesList
        moovies={this.props.moovies}
        deleteMoovie={this.deleteMoovie}
        viewMoovieInfo={this.viewMoovieInfo}
      />
    );
  }
}

Board.propTypes = {
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

const mapStateToProps = state => ({
  moovies: state.moovies.list
});

export default connect(mapStateToProps, null)(Board);
