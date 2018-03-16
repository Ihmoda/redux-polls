import { RECEIVE_POLLS, ADD_POLL_ANSWER } from "../actions/polls";
import { ADD_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      };
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll
      };
    case ADD_POLL_ANSWER:
      const poll = state[action.id];
      const votes = `${action.answer}Votes`;
      return {
        ...state,
        [action.id]: {
          ...poll,
          [votes]: poll[votes].concat([action.authedUser])
        }
      };
    default:
      return state;
  }
}
