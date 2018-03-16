import {
  RECEIVE_USERS,
  ADD_POLL_USER,
  ADD_ANSWER_USER
} from "../actions/users";

export default function users(state = {}, action) {
  const user = state[action.authedUser];
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_POLL_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...user,
          polls: user.polls.concat([action.id])
        }
      };
    case ADD_ANSWER_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...user,
          answers: user.answers.concat([action.id])
        }
      };
    default:
      return state;
  }
}
