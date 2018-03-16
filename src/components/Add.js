import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddData } from "../actions/shared";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
      author: this.props.authedUser
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, authedUser, history } = this.props;

    dispatch(handleAddData(this.state, this.props.authedUser));
    history.push("/");
  };

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState(() => ({
      [name]: value
    }));
  };

  isDisabled = () => {
    return (
      this.state.a === "" ||
      this.state.b === "" ||
      this.state.c === "" ||
      this.state.d === ""
    );
  };

  render() {
    return (
      <div>
        <form className="addform" onSubmit={this.handleSubmit}>
          <h3>What is your question?</h3>
          <input
            onChange={this.handleOnChange}
            name="question"
            type="text"
            className="input"
          />
          <h3>What are the options?</h3>
          <h3>A.</h3>
          <input
            onChange={this.handleOnChange}
            name="a"
            type="text"
            className="input"
          />
          <h3>B.</h3>
          <input
            onChange={this.handleOnChange}
            name="b"
            type="text"
            className="input"
          />
          <h3>C.</h3>
          <input
            onChange={this.handleOnChange}
            name="c"
            type="text"
            className="input"
          />
          <h3>D.</h3>
          <input
            onChange={this.handleOnChange}
            name="d"
            type="text"
            className="input"
          />
          <button type="submit" className="btn" disabled={this.isDisabled()}>
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
