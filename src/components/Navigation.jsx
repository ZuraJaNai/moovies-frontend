import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSortedMoovies, updateMoovies } from "../actions/moovieActions";
import { findMooviesByStar, findMooviesByTitle } from "../actions/searchActions";
import axios from "axios";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.fileInput = React.createRef();
  }

  handleUpload = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    axios.post("/import", data)
      .then(this.props.updateMoovies())
      .catch(err => console.log(err))
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.searchInput.current.value;
    Promise.all([
      this.props.findMooviesByTitle(value),
      this.props.findMooviesByStar(value)
    ])
      .then(() => {
        this.props.history.push(`/search?q=${encodeURI(value)}`)
      })
      .catch(err => console.log(err))
  };

  getSortedMoovies = () => {
    this.props.getSortedMoovies().then(this.props.history.push("/"));
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">MooviesLib</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/add">Add moovie</Nav.Link>
            <Nav.Link onClick={this.getSortedMoovies}>A-Z list</Nav.Link>
            <input
              type="file"
              id="targetFile"
              ref={this.fileInput}
              onChange={this.handleUpload}
            />
          </Nav>
          <Form inline onSubmit={this.handleSubmit}>
            <FormControl
              ref={this.searchInput}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  getSortedMoovies: PropTypes.func.isRequired
}

export default connect(null, {
  getSortedMoovies,
  updateMoovies,
  findMooviesByStar,
  findMooviesByTitle
})(withRouter(Navigation));
