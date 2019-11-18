import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMoovie, getMoovie } from "../actions/moovieActions";
import MoovieData from "./MoovieData";
import Button from "react-bootstrap/Button";

class MoovieInfo extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.getMoovie(id);
  }

  deleteMoovie = (moovieId) => {
    this.props.deleteMoovie(moovieId)
      .then(this.props.history.push("/"))
      .catch(err => console.log(err));
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
          <div>
            <MoovieData
              headers={[title, year, format, stars]}
              values={[info[title], info[year], info[format], info[stars]]}
            />
            <div className="container d-flex justify-content-center">
              <Button variant="danger" onClick={() => this.deleteMoovie(info["_id"])}>
                Delete
        </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MoovieInfo.propTypes = {
  info: PropTypes.object,
  deleteMoovie: PropTypes.func.isRequired,
  getMoovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  info: state.moovies.moovieInfo
});

export default connect(mapStateToProps, { deleteMoovie, getMoovie })(
  MoovieInfo
);
