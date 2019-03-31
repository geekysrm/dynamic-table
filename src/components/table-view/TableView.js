import React from "react";
import ReactDataGrid from "react-data-grid";
import { connect } from "react-redux";

class TableView extends React.Component {

state = { rows:this.props.rows.rowsData };

render() {
  
  const {rowsData} = this.props.rows;
  const {columnsData}  = this.props.columns;

     const columns = columnsData.map((columnData,index) => {
      
        
       return (
              { key: columnData.columnName.replace(" ",""), name: `${columnData.columnName} (${columnData.columnType})`, editable: false, }

    )
    })


    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={20}
        enableCellSelect={true}
      />
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
