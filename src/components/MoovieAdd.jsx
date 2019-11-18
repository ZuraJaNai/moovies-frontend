import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMoovie } from "../actions/moovieActions";
import { Form, Button } from "react-bootstrap";
import MoovieData from "./MoovieData";

class MoovieAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
    this.titleInput = React.createRef();
    this.yearInput = React.createRef();
    this.formatInput = React.createRef();
    this.starsInput = React.createRef();
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();
    if (this.handleValidation()) {
      const moovieData = {
        "Title": this.titleInput.current.value,
        "Release Year": this.yearInput.current.value,
        "Format": this.formatInput.current.value,
        "Stars": this.starsInput.current.value
      };
      this.props.addMoovie(moovieData);
      window.location.reload();
    }
  };

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Title
    const title = this.titleInput.current.value;
    if (!title) {
      formIsValid = false;
      errors["title"] = "Cannot be empty";
    }

    //Year
    const year = this.yearInput.current.value;
    if (year) {
      if (!year.match(/([\d]+)/)) {
        formIsValid = false;
        errors["year"] = "Should only contain numbers";
      }
      if (!(parseInt(year) > 1850 && parseInt(year) < 2025)) {
        formIsValid = false;
        errors["year"] = "Year should be between 1890 and 2025";
      }
    }


    //Stars
    const stars = this.starsInput.current.value;
    if (stars) {
      if (!stars.match(/([^\d]+)/)) {
        formIsValid = false;
        errors["stars"] = "This field should not contain numbers";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    const headers = ["Title", "Release Year", "Format", "Stars"];
    const values = [
      <div>
        <Form.Control type="text" ref={this.titleInput} />
        <span style={{ color: "red" }}>{this.state.errors["title"]}</span>
      </div>,
      <div>
        <Form.Control type="text" ref={this.yearInput} />
        <span style={{ color: "red" }}>{this.state.errors["year"]}</span>
      </div>,
      <Form.Control as="select" ref={this.formatInput}>
        <option>VHS</option>
        <option>DVD</option>
        <option>Blu-Ray</option>
      </Form.Control>,
      <div>
        <Form.Control type="text" ref={this.starsInput} />
        <span style={{ color: "red" }}>{this.state.errors["stars"]}</span>
      </div>
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
