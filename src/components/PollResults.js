import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";

class PollResults extends Component {
  render() {
    const {
      aText,
      bText,
      cText,
      dText,
      aVotes,
      bVotes,
      cVotes,
      dVotes
    } = this.props.poll;

    const { authedUser } = this.props;

    let chosen;
    if (aVotes.includes(authedUser)) {
      chosen = "a";
    } else if (bVotes.includes(authedUser)) {
      chosen = "b";
    } else if (cVotes.includes(authedUser)) {
      chosen = "c";
    } else {
      chosen = "d";
    }

    const totalVotes =
      aVotes.length + bVotes.length + cVotes.length + dVotes.length;
    const aVotePercent =
      parseFloat(aVotes.length / totalVotes * 100).toFixed() + "%";
    const bVotePercent =
      parseFloat(bVotes.length / totalVotes * 100).toFixed() + "%";
    const cVotePercent =
      parseFloat(cVotes.length / totalVotes * 100).toFixed() + "%";
    const dVotePercent =
      parseFloat(dVotes.length / totalVotes * 100).toFixed() + "%";

    return (
      <ul>
        <li className={"option " + (chosen === "a" ? "chosen" : "")}>
          <div className="result">
            <span>{aText}</span>
            <span>
              {aVotePercent} ({aVotes.length})
            </span>
          </div>
        </li>
        <li className={"option " + (chosen === "b" ? "chosen" : "")}>
          <div className="result">
            <span>{bText}</span>
            <span>
              {bVotePercent} {bVotes.length}
            </span>
          </div>
        </li>
        <li className={"option " + (chosen === "c" ? "chosen" : "")}>
          <div className="result">
            <span>{cText}</span>
            <span>
              {cVotePercent} {cVotes.length}
            </span>
          </div>
        </li>
        <li className={"option " + (chosen === "d" ? "chosen" : "")}>
          <div className="result">
            <span>{dText} </span>
            <span>
              {dVotePercent} {dVotes.length}
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default connect()(PollResults);
