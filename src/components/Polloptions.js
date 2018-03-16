import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";

class PollOptions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(answer) {
    const { dispatch, authedUser } = this.props;
    const { id } = this.props.poll;
    dispatch(handleAddAnswer({ authedUser, id, answer }));
  }

  render() {
    const { aText, bText, cText, dText } = this.props.poll;

    return (
      <ul>
        <li className="option" onClick={this.handleClick.bind(null, "a")}>
          {aText}
        </li>
        <li className="option" onClick={this.handleClick.bind(null, "b")}>
          {bText}
        </li>
        <li className="option" onClick={this.handleClick.bind(null, "c")}>
          {cText}
        </li>
        <li className="option" onClick={this.handleClick.bind(null, "d")}>
          {dText}
        </li>
      </ul>
    );
  }
}

export default connect()(PollOptions);
