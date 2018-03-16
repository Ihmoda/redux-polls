export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL_ANSWER = "ADD_POLL_ANSWER";
export const ADD_POLL = "ADD_POLL";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  };
}

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  };
}

export function addPollAnswer({ authedUser, id, answer }) {
  return {
    type: ADD_POLL_ANSWER,
    authedUser,
    id,
    answer
  };
}
