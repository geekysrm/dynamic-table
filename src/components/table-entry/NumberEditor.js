import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DateInput } from "semantic-ui-calendar-react";
import { Form } from "semantic-ui-react";

export default class DateEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { numberEditor: "" };
  }
  getValue = () => {
    // return { number: this.state.numberEditor };
    let obj = {};
    obj[this.props.column.key] = this.state.numberEditor;
    return obj;
  };

  getInputNode = () => {
    return ReactDOM.findDOMNode(this);
  };

  handleChange = ({ target: { value } }) => {
    console.log(value);
    if (isNaN(Number(value))) return;
    this.setState({ numberEditor: value });
  };

  render() {
    console.log(this.props);
    return (
      <input
        name="numberEditor"
        type="text"
        placeholder="Enter number"
        value={this.state.numberEditor}
        onChange={this.handleChange}
      />
    );
  }
}
