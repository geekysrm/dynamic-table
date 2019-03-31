import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import ColumnCreation from "./components/column-creation/ColumnCreation";
import TableEntry from "./components/table-entry/TableEntry";
import TableView from "./components/table-view/TableView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/*<Navbar />*/}
            <Route exact path="/" component={ColumnCreation} />
            <Route exact path="/table-entry" component={TableEntry} />
            <Route exact path="/table-view" component={TableView} />

            {/*<Footer />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
