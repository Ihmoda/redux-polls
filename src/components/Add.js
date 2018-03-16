import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddData } from "../actions/shared";

class Add extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch, authedUser, history } = this.props;

    const newPoll = {
      question: this.question.value,
      a: this.optionA.value,
      b: this.optionB.value,
      c: this.optionC.value,
      d: this.optionD.value,
      author: authedUser
    };

    dispatch(handleAddData(newPoll, this.props.authedUser));

    history.push("/");
  }

  render() {
    return (
      <div>
        <form className="addform" onSubmit={this.handleSubmit}>
          <h3>What is your question?</h3>
          <input
            ref={input => (this.question = input)}
            type="text"
            className="input"
          />
          <h3>What are the options?</h3>
          <h3>A.</h3>
          <input
            ref={input => (this.optionA = input)}
            type="text"
            className="input"
          />
          <h3>B.</h3>
          <input
            ref={input => (this.optionB = input)}
            type="text"
            className="input"
          />
          <h3>C.</h3>
          <input
            ref={input => (this.optionC = input)}
            type="text"
            className="input"
          />
          <h3>D.</h3>
          <input
            ref={input => (this.optionD = input)}
            type="text"
            className="input"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  authedUser: state.authedUser
}))(Add);
