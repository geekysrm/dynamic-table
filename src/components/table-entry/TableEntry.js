import React from "react";
import ReactDataGrid from "react-data-grid";
import { connect } from "react-redux";
import { Editors } from "react-data-grid-addons";

const { DropDownEditor } = Editors;

class Example extends React.Component {

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

  handleClick = () => {
    console.log(this.state.rows)
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
          { key: columnData.columnName.replace(" ",""), name: columnData.columnName, editable: true,editor: <DropDownEditor options={options} /> }
        )
        }
        if(columnData.columnType==="Number"){
            return (
              { key: columnData.columnName.replace(" ",""), name: columnData.columnName, editable: true, }
        )
        }
       if(columnData.columnType==="Date"){
        return (
        { key: columnData.columnName.replace(" ",""), name: columnData.columnName, editable: true, }
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
     <button type="button" onClick={this.handleClick}>Submit data</button>
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
  {  }
)(Example);