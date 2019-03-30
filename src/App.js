import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import ColumnCreation from "./components/column-creation/ColumnCreation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/*<Navbar />*/}
            <Route exact path="/" component={ColumnCreation} />

            {/*<Footer />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
