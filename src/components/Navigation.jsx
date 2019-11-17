import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSortedMoovies } from "../actions/moovieActions";

import {
  findMooviesByStar,
  findMooviesByTitle
} from "../actions/searchActions";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

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
            <Nav.Link ><input type="file" /></Nav.Link>
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
  findMooviesByStar,
  findMooviesByTitle
})(withRouter(Navigation));
