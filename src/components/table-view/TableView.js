import React from "react";
import ReactDataGrid from "react-data-grid";
import { connect } from "react-redux";

class TableView extends React.Component {

state = { rows:this.props.rows.rowsData };


restructureTable = () => {

  window.location.assign('/')
}

render() {
  
  const {rowsData} = this.props.rows;
  const {columnsData}  = this.props.columns;

     const columns = columnsData.map((columnData,index) => {
      
        
       return (
              { key: columnData.columnName.replace(" ",""), name: `${columnData.columnName} (${columnData.columnType})`, editable: false, }

    )
    })



    return (
      <>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={20}
        enableCellSelect={true}
      />
      <button type="button" className="btn btn-danger" onClick={this.restructureTable}>
         Restructure table
        </button>
        <small>All your data will be deleted</small>
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
  {}
)(TableView);
