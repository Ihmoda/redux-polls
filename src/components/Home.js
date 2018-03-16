import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false
    };

    this.getAnswered = this.getAnswered.bind(this);
    this.getUnanswered = this.getUnanswered.bind(this);
  }

  getAnswered() {
    this.setState(() => {
      const newState = {
        answered: true
      };
      return newState;
    });
  }

  getUnanswered() {
    this.setState(() => {
      const newState = {
        answered: false
      };
      return newState;
    });
  }

  render() {
    const { answeredPolls, unansweredPolls, authedUser } = this.props;
    const { answered } = this.state;

    const polls = answered ? answeredPolls : unansweredPolls;

    return (
      <div>
        <div className="dashboard-toggle">
          <button
            onClick={this.getUnanswered}
            style={{
              textDecoration: this.state.answered ? "none" : "underline"
            }}
          >
            Unanswered
          </button>
          <span>|</span>
          <button
            onClick={this.getAnswered}
            style={{
              textDecoration: this.state.answered ? "underline" : "none"
            }}
          >
            Answered
          </button>
        </div>
        <div>
          <List polls={polls} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, polls, users }) {
  const answers = users[authedUser].answers;
  const answeredPolls = answers
    .map(id => {
      return polls[id];
    })
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  const unansweredPolls = Object.keys(polls)
    .filter(id => {
      return !answers.includes(id);
    })
    .map(id => {
      return polls[id];
    })
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

  return {
    authedUser,
    answeredPolls,
    unansweredPolls
  };
}

export default connect(mapStateToProps)(Home);
