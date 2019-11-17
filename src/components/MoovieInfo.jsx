import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMoovie, getMoovie } from "../actions/moovieActions";
import MoovieData from "./MoovieData";

class MoovieInfo extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.getMoovie(id);
  }

  render() {
    const { info } = this.props;
    const [title, year, format, stars] = [
      "Title",
      "Release Year",
      "Format",
      "Stars"
    ];
    return (
      <div>
        {info != null && (
          <MoovieData
            headers={[title, year, format, stars]}
            values={[info[title], info[year], info[format], info[stars]]}
          />
        )}
      </div>
    );
  }
}

MoovieInfo.propTypes = {
  info: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      "Release Year": PropTypes.string,
      Format: PropTypes.string,
      Stars: PropTypes.string
    })
  ),
  deleteMoovie: PropTypes.func.isRequired,
  getMoovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  info: state.moovies.moovieInfo
});

export default connect(mapStateToProps, { deleteMoovie, getMoovie })(
  MoovieInfo
);
