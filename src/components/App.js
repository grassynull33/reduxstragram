import React, { Component } from "react";
import "./reset.css";
import "./App.css";

// NPM Modules
import { Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

// Components
import PhotoGrid from "./PhotoGrid";
import Single from "./Single";

// Router
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Link to="/">Reduxstragram</Link>
        </h1>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={PhotoGrid} />
            <Route exact path="/view/:id" component={Single} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}

export default withRouter(App);