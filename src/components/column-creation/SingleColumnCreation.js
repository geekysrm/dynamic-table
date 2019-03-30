import React, { Component } from "react";

class SingleColumnCreation extends Component {
  state = {
    columnName:"",
    columnType:"Date",
    multiSelectValues: ""
  }
  // TODO: Add validation on inputs
  handleSubmit = (e) => {
    e.preventDefault();
    const {columnName,columnType,multiSelectValues} = this.state;
    console.log(this.state);

      let multiValues = multiSelectValues.trim().split(',');
        multiValues = multiValues.map(s => s.trim());
        console.log(multiValues);
        this.props.onAddColumnData(this.state);        

  }

  handleRemoveColumn = () => {
    this.props.onRemoveColumnData(this.props.columnNumber);

  }
  onChange = e => {
    // this.setState({ [e.target.name]: e.target.value }, () => {
    // this.props.onAddColumnData(this.state);
    // });
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    return (
      <div>
      <h2>Column #{this.props.columnNumber}</h2>
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
                <option>Date</option>
                <option>Number</option>
                <option>Multiselect</option>
              </select>
            </div>
          </div>
           {this.state.columnType==="Multiselect" && <div className="form-group row">
           <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="text"
                name="multiSelectValues"
                value={this.multiSelectValues}
                className="form-control"
                placeholder="Enter list of values separated by commas"
                onChange={this.onChange}
              />
            </div>
          </div>}
         <button type="submit" className="btn btn-primary">
            Add this column
        </button>
        <button type="button" onClick={this.handleRemoveColumn} className="btn btn-danger">
            Remove this column
        </button>
        </form>
      </div>
    );
  }
}

export default SingleColumnCreation;