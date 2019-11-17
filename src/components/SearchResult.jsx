import React from "react";
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
          <MooviesList moovies={byTitle} />
        </Tab>
        <Tab eventKey="stars" title="Search results by star name">
          <MooviesList moovies={byStar} />
        </Tab>
      </Tabs>
    );
  }
};

const mapStateToProps = state => ({
  byTitle: state.search.byTitle,
  byStar: state.search.byStar
});

export default connect(mapStateToProps, { findMooviesByStar, findMooviesByTitle })(SearchResult);
