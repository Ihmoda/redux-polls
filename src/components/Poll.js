import React, { Component } from "react";
import { connect } from "react-redux";
import { parse } from "query-string";
import PollOptions from "./Polloptions";
import PollResults from "./PollResults";

function PollInfo(props) {
  const { question, avatarURL } = props;
  return (
    <div>
      <h1 className="question">{question}</h1>
      <div className="poll-author">
        By
        <img src={avatarURL} alt="Author's picture" />
      </div>
    </div>
  );
}

class Poll extends Component {
  render() {
    const { polls, authedUser, users } = this.props;
    const pollID = parse(this.props.location.search).id;
    const { question, author } = polls[pollID];
    const { avatarURL } = users[author];
    const answered = polls[pollID].aVotes
      .concat(polls[pollID].bVotes)
      .concat(polls[pollID].cVotes)
      .concat(polls[pollID].dVotes)
      .includes(authedUser)
      ? true
      : false;

    return (
      <div className="poll-container">
        <PollInfo question={question} avatarURL={avatarURL} />
        {!answered ? (
          <PollOptions poll={polls[pollID]} authedUser={authedUser} />
        ) : (
          <PollResults poll={polls[pollID]} authedUser={authedUser} />
        )}
      </div>
    );
  }
}

export default connect(state => ({
  polls: state.polls,
  authedUser: state.authedUser,
  users: state.users
}))(Poll);
