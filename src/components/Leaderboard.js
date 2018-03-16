import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { sortedUsers } = this.props;

    return (
      <ul>
        {sortedUsers.map(user => (
          <li className="user" key={user.id}>
            <div>
              <img src={user.avatarURL} alt="" />
              <h1>{user.name}</h1>
              <p>{user.polls} polls</p>
              <p>{user.answers} answer</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps({ users }) {
  const sortedUsers = Object.keys(users)
    .map(id => {
      const { name, avatarURL, polls, answers } = users[id];

      return {
        id,
        name,
        avatarURL,
        polls: polls.length,
        answers: answers.length
      };
    })
    .sort((a, b) => {
      return b.polls + b.answers - (a.polls + a.answers);
    });

  return {
    sortedUsers
  };
}

export default connect(mapStateToProps)(Leaderboard);
