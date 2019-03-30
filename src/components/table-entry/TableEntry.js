import React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { connect } from "react-redux";
// import "./styles.css";

// const columns = [
//   { key: "id", name: "ID", editable: true },
//   { key: "title", name: "Title", editable: true },
//   { key: "complete", name: "Complete", editable: true }
// ];

// const rows = [
//   { id: 0, title: "Task 1", complete: 20 },
//   { id: 1, title: "Task 2", complete: 40 },
//   { id: 2, title: "Task 3", complete: 60 }
// ];



class Example extends React.Component {
  state = { rows:[] };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  handleClick = () => {
    console.log(this.state.rows)
  }

  render() {
    const {columnsData}  = this.props.columns;
    
       const columns = columnsData.map((columnData,index) => {
        console.log(columnData)
      return (
        { key: columnData.columnName, name: columnData.columnName, editable: true }
        )
    })

   
    console.log(columns)
    return (
      <>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={3}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
     <button type="button" onClick={this.handleClick}>Submit data</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns
});

export default connect(
  mapStateToProps,
  {  }
)(Example);