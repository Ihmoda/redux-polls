import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Add from "./Add";
import Nav from "./Nav";
import Poll from "./Poll";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { parse } from "query-string";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <BrowserRouter>
        <div className="container">
          <LoadingBar />
          {!authedUser ? null : (
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/add" component={Add} />
                <Route path="/polls" component={Poll} />
                <Route
                  render={function() {
                    return <p> Not Found </p>;
                  }}
                />
              </Switch>
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(state => ({
  authedUser: state.authedUser
}))(App);
