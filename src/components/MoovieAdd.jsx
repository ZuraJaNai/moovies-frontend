import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMoovie } from "../actions/moovieActions";
import { Form, Button } from "react-bootstrap";
import MoovieData from "./MoovieData";

class MoovieAdd extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.yearInput = React.createRef();
    this.formatInput = React.createRef();
    this.starsInput = React.createRef();
  }

  handleSubmit = e => {
    e.stopPropagation();
    const moovieData = {
      "Title": this.titleInput.current.value,
      "Release Year": this.yearInput.current.value,
      "Format": this.formatInput.current.value,
      "Stars": this.starsInput.current.value
    };
    this.props.addMoovie(moovieData);
  };

  render() {
    const headers = ["Title", "Release Year", "Format", "Stars"];
    const values = [
      <Form.Control required type="text" ref={this.titleInput} />,
      <Form.Control type="text" ref={this.yearInput} />,
      <Form.Control as="select" ref={this.formatInput}>
        <option>VHS</option>
        <option>DVD</option>
        <option>Blu-Ray</option>
      </Form.Control>,
      <Form.Control type="text" ref={this.starsInput} />
    ];
    return (
      <Form onSubmit={this.handleSubmit}>
        <MoovieData headers={headers} values={values} />
        <div className="container d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Save
        </Button>
        </div>
      </Form>
    );
  }
}

MoovieAdd.propTypes = {
  addMoovie: PropTypes.func.isRequired
}

export default connect(null, { addMoovie })(MoovieAdd);
