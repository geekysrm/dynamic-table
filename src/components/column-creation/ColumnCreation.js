import React, { Component } from "react";
import { connect } from "react-redux";

import SingleColumnCreation from "./SingleColumnCreation";
import { addColumns } from "../../actions/columnActions";

class ColumnCreation extends Component {
  state ={ 
    columns:1,
    columnsData: []
  }

  /*
    [{columnName: "x", columnType: "Number"}],
    [{columnName: "y", columnType: "Date"}]
  */

  handleAddColumnClick = () => {
    this.setState((prevState, props) => {
      return {columns: prevState.columns + 1};
    });
  }
    
    handleAddColumnData = (columnData) => {
      // console.log(columnData)
       //Add that columns data to state
        var newcolumnsData = this.state.columnsData.slice();    
        newcolumnsData.push(columnData);   
        this.setState({columnsData:newcolumnsData})
    }

    handleRemoveColumnData = (indexToRemove) => {
      // console.log(columnData)
      //Remove that columns data from state
        this.setState((prevState, props) => {
          return {columns: prevState.columns - 1};
        });
        this.setState({
          columnsData: this.state.columnsData.filter((_, i) => i !== (indexToRemove-1))
        });
      
    }
  
  handleSubmitClick = () => {
    console.log("Final submit");
    console.log(this.state.columnsData);
    this.props.addColumns(this.state.columnsData);
    
  }

  renderColumnForms = () => {
    let columnForm = []
    for (let j = 1; j <= this.state.columns; j++) {
      columnForm.push(<SingleColumnCreation onAddColumnData={this.handleAddColumnData} onRemoveColumnData={this.handleRemoveColumnData} columnNumber={j} key={j} />)
    }
     
    return columnForm
  }


  render() {
    console.log(this.state)
    return (
      <div>
        {this.renderColumnForms()}
        <button type="button" className="btn btn-primary" onClick={this.handleAddColumnClick}>
            +
        </button>
        <br />
        <button type="button" className="btn btn-success" onClick={this.handleSubmitClick}>
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns
});

export default connect(
  mapStateToProps,
  { addColumns }
)(ColumnCreation);