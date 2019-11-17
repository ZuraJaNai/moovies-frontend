import React, { Component } from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSortedMoovies } from "../actions/moovieActions";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const value = encodeURI(this.searchInput.current.value);
    this.props.history.push(`/search?q=${value}`)
  };

  getSortedMoovies = () => {
    console.log(this.props);
    this.props.getSortedMoovies().then(this.props.history.push("/"));
  };
  render() {
    return (
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">MooviesLib</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/add">Add moovie</Nav.Link>
            <Nav.Link onClick={this.getSortedMoovies}>A-Z list</Nav.Link>
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

export default connect(null, {
  getSortedMoovies
})(withRouter(Navigation));
