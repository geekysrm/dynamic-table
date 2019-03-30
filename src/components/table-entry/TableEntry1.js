// import React, { Component } from "react";
// import { connect } from "react-redux";

// // import { addColumns } from "../../actions/columnActions";

// class TableEntry extends Component {
//   state ={ 
//     columns:1,
//     columnsData: []
//   }

//   render() {
//     return (
//       <div>
//         table entry
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   columns: state.columns
// });

// export default connect(
//   mapStateToProps,
//   {  }
// )(TableEntry);

import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
// Import Hamoni Sync
// import Hamoni from "hamoni-sync";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      firstName: "",
      lastName: ""
    };
  }

  // async componentDidMount() {
  //   const accountId = "YOUR_ACCOUNT_ID";
  //   const appId = "YOUR_APP_ID";
  //   let hamoni;

  //   const response = await fetch("https://api.sync.hamoni.tech/v1/token", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8"
  //     },
  //     body: JSON.stringify({ accountId, appId })
  //   });
  //   const token = await response.json();
  //     hamoni = new Hamoni(token);

  //     hamoni
  //       .connect()
  //       .then(() => {
  //         hamoni
  //           .get("datagrid")
  //           .then(listPrimitive => {
  //             this.listPrimitive = listPrimitive;

              

  //             listPrimitive.onItemAdded(item => {
  //               this.setState({ data: [...this.state.data, item.value] });
  //             });

  //             listPrimitive.onItemUpdated(item => {
  //               let data = [
  //                 ...this.state.data.slice(0, item.index),
  //                 item.value,
  //                 ...this.state.data.slice(item.index + 1)
  //               ];

  //               this.setState({ data: data });
  //             });

  //             listPrimitive.onSync(data => {
  //               this.setState({ data: data });
  //             });
  //           })
  //           .catch(error => console.log(error));
  //       })
  //       .catch(error => console.log(error));
    
  // }

  handleChange = event => {
    if (event.target.name === "firstName")
      this.setState({ firstName: event.target.value });
    if (event.target.name === "lastName")
      this.setState({ lastName: event.target.value });
  };

  handleSubmit = event => {
    this.listPrimitive.add({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
    this.setState({ firstName: "", lastName: "" });
    event.preventDefault();
  };

  renderEditable = cellInfo => {
    console.log(cellInfo)
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          let row = this.state.data[cellInfo.index];
          row[cellInfo.column.id] = e.target.innerHTML;
          this.listPrimitive.update(cellInfo.index, row);
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { data } = this.state;
    const { columnsData } = this.props.columns;
    console.log(columnsData)

    const columns = columnsData.map(column => {
      return (
        {
                Header: column.columnName,
                accessor: column.columnName,
                Cell: this.renderEditable
              }
        )
      
    })
console.log(columns)
    return (
      <div className="App">        
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "First Name",
                accessor: "firstName",
                Cell: this.renderEditable
              },
              {
                Header: "Last Name",
                accessor: "lastName",
                Cell: this.renderEditable
              },
              // {
              //   Header: "Full Name",
              //   id: "full",
              //   accessor: d => (
              //     <div
              //       dangerouslySetInnerHTML={{
              //         __html: d.firstName + " " + d.lastName
              //       }}
              //     />
              //   )
              // }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
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
)(App);

