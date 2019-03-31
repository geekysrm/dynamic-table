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

  returnSingleObject = (j) => {
    let obj = {};
    this.props.columns.columnsData.map((columnData) => {
      if(this.props.rows.rowsData.length===0 )
      obj[columnData.columnName]=""
    else obj[columnData.columnName] = this.props.rows.rowsData[j][columnData.columnName]
    // else console.log(this.props.rows.rowsData[j][columnData.columnName])
    })
    return obj;
  }
  // Make below thing pretty
  // state = { 
  //   rows: [this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject(),this.returnSingleObject()]
  // };

state = { 
    rows: [this.returnSingleObject(0),this.returnSingleObject(1),this.returnSingleObject(2),this.returnSingleObject(3),this.returnSingleObject(4),this.returnSingleObject(5),this.returnSingleObject(6),this.returnSingleObject(7),this.returnSingleObject(8),this.returnSingleObject(9),this.returnSingleObject(10),this.returnSingleObject(11),this.returnSingleObject(12),this.returnSingleObject(13),this.returnSingleObject(14),this.returnSingleObject(15),this.returnSingleObject(16),this.returnSingleObject(17),this.returnSingleObject(18),this.returnSingleObject(19)]
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