import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  findMooviesByStar,
  findMooviesByTitle
} from "../actions/searchActions";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import MooviesList from "./MooviesList"

class SearchResult extends React.Component {
  componentDidMount() {
    const {
      location: {
        search
      }
    } = this.props;
    try {
      const value = decodeURI(search.split("=")[1])
      Promise.all([
        this.props.findMooviesByTitle(value),
        this.props.findMooviesByStar(value)
      ])
        .catch(err => console.log(err))
    } catch (e) { // catches a malformed URI
      console.error(e);
      this.props.history.push("/");
    }
  }
  render() {
    const { byTitle, byStar } = this.props;
    return (
      <Tabs defaultActiveKey="title" transition={false} id="search-tab">
        <Tab eventKey="title" title="Search results by moovie title">
          {byTitle.length > 0 ? <MooviesList moovies={byTitle} /> : <h2>No results</h2>}
        </Tab>
        <Tab eventKey="stars" title="Search results by star name">
          {byStar.length > 0 ? <MooviesList moovies={byStar} /> : <h2>No results</h2>}
        </Tab>
      </Tabs>
    );
  }
};

SearchResult.propTypes = {
  byTitle: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      "Release Year": PropTypes.string,
      Format: PropTypes.string,
      Stars: PropTypes.string
    })
  ).isRequired,
  byStar: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      "Release Year": PropTypes.string,
      Format: PropTypes.string,
      Stars: PropTypes.string
    })
  ).isRequired,
  findMooviesByStar: PropTypes.func.isRequired,
  findMooviesByTitle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  byTitle: state.search.byTitle,
  byStar: state.search.byStar
});

export default connect(mapStateToProps, { findMooviesByStar, findMooviesByTitle })(SearchResult);
