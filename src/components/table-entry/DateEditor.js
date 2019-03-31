import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DateInput } from "semantic-ui-calendar-react";
import { Form } from "semantic-ui-react";

export default class DateEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { dateEditor: "" };
  }
  getValue = () => {
    // return { date: this.state.dateEditor };
    let obj = {};
    obj[this.props.column.key] = this.state.dateEditor;
    return obj;
  };

  getInputNode = () => {
    return ReactDOM.findDOMNode(this);
  };

  handleChange = (event, { name, value }) => {
    console.log([name]);
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    return (
      <Form>
        <DateInput
          name="dateEditor"
          dateFormat="L"
          placeholder="Click again"
          value={this.state.dateEditor}
          closable={true}
          iconPosition="left"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}
