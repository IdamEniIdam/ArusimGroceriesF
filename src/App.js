import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Agent from "./components/auth/Agent";
import Successfull from './components/auth/SuccessfullRegistration'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Agent} />
            <Route exact path="/form-submitted" component={Successfull} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
