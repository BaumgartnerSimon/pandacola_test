import React from "react";
import 'whatwg-fetch';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Home";

import "./css/App.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}
export default App;
