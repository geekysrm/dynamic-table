import React, { Component } from "react";

class ColumnCreation extends Component {
  state = {
    columnName:"",
    columnType:""
  }
  // TODO: Add validation on inputs
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Column Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="columnName"
                value={this.columnName}
                className="form-control"
                placeholder="Enter column name"
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputState">
              Column Type
            </label>
            <div className="col-sm-10">
              <select name="columnType"
                value={this.columnType} onChange={this.onChange} id="inputState"  className="form-control">
                <option>Choose an option</option>
                <option>Date</option>
                <option>Number</option>
                <option>Multiselect</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Column
          </button>
        </form>
      </div>
    );
  }
}

export default ColumnCreation;
