import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import FirstComponent from "./components/FirstComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/*<Navbar />*/}
            <Route exact path="/" component={FirstComponent} />

            {/*<Footer />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
