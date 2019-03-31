import React from "react";
import ReactDataGrid from "react-data-grid";
import { connect } from "react-redux";
import { Editors } from "react-data-grid-addons";
import "semantic-ui-css/semantic.min.css";

import DateEditor from "./DateEditor";
// import { addColumns } from "../../actions/columnActions";
import { addRows } from "../../actions/rowActions";


const { DropDownEditor } = Editors;

class TableEntry extends React.Component {

  returnSingleObject = () => {
    let obj = {};
    this.props.columns.columnsData.map((columnData) => {
      obj[columnData.columnName]=""
    })
    return obj;
  }
  // Make below thing pretty
  state = { 
    rows: [this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject()]
  };


  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  handleSubmitClick = () => {
    console.log(this.state.rows)
    this.props.addRows(this.state.rows)

  }

  handleViewClick = () => {
    console.log(this.state.rows)
    this.props.addRows(this.state.rows)

  }

  render() {

    const {columnsData}  = this.props.columns;
    const columns = columnsData.map((columnData,index) => {
      if(columnData.columnType==="Multiselect")
        {
          const options=columnData.multiSelectValues.split(',').map((option) => {
            return (
          
                { id: option, value: option }

              )
          })
          return (
          { key: columnData.columnName.replace(" ",""), name: `${columnData.columnName} (${columnData.columnType})`, editable: true,editor: <DropDownEditor options={options} /> }
        )
        }
        if(columnData.columnType==="Number"){
            return (
              { key: columnData.columnName.replace(" ",""), name: `${columnData.columnName} (${columnData.columnType})`, editable: true, }
        )
        }
       if(columnData.columnType==="Date"){
        return (
        { key: columnData.columnName.replace(" ",""), name: `${columnData.columnName} (${columnData.columnType})`, editable: true,editor: DateEditor  }
        )
      }
    })

    return (
      <>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={20}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
     <button type="button" onClick={this.handleSubmitClick}>Submit data</button>
     <button type="button" className="btn btn-success" onClick={() => this.props.history.push('/table-view')}>
         View Table
        </button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns,
  rows: state.rows
});

export default connect(
  mapStateToProps,
  {addRows}
)(TableEntry);