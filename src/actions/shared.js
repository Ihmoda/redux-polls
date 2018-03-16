import { getInitialData, savePollAnswer, savePoll } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import {
  receiveUsers,
  addUserAnswer,
  addPollUser,
  addAnswerUser
} from "../actions/users";
import { receivePolls, addPollAnswer, addPoll } from "../actions/polls";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleAddAnswer(args) {
  return dispatch => {
    return savePollAnswer(args).then(() => {
      dispatch(addPollAnswer(args));
      dispatch(addAnswerUser(args));
    });
  };
}

export function handleAddData(poll, authedUser) {
  return dispatch => {
    return savePoll(poll).then(newPoll => {
      dispatch(addPoll(newPoll));
      dispatch(addPollUser(newPoll.id, authedUser));
    });
  };
}
