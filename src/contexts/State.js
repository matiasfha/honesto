import React from "react";
import {
  generateTeamFeedback,
  generateMyFeedback,
  generateFeedback
} from "api/feedback";
import { getCurrentUser } from "api/users";

export const StateContext = React.createContext(null);

const initialState = {
  currentUser: getCurrentUser(),
  sharedFeedback: generateFeedback()
};
/* Actions */
const LOGIN = "LOGIN";
const FETCH_SHARE_FEEDBACK = "FETCH_SHARE_FEEDBACK";
const GET_MY_FEEDBACK = "GET_MY_FEEDBACK";
const GET_TEAM_FEEDBACK = "GET_TEAM_FEEDBACK";
const UPDATE_SHARED_FEEDBACK = "UPDATE_SHARED_FEEDBACK";
function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: getCurrentUser()
      };
    case FETCH_SHARE_FEEDBACK:
      return {
        ...state,
        sharedFeedback: generateFeedback()
      };
    case UPDATE_SHARED_FEEDBACK:
      const updatedFeedback = state.sharedFeedback.map(item => {
        if (item.user.id === action.payload.userId) {
          return { ...item, answers: action.payload.answers, submitted: true };
        }
        return item;
      });
      return {
        ...state,
        sharedFeedback: updatedFeedback
      };
    case GET_MY_FEEDBACK:
      return {
        ...state,
        myFeedback: generateMyFeedback()
      };
    case GET_TEAM_FEEDBACK:
      return {
        ...state,
        teamFeedback: generateTeamFeedback()
      };
    default:
      return state;
  }
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const context = {
    login: () => dispatch({ type: LOGIN }),
    currentUser: () => state.currentUser,
    fetchSharedFeedback: () => dispatch({ type: FETCH_SHARE_FEEDBACK }),
    sharedFeedback: state.sharedFeedback,
    myFeedback: state.myFeedback,
    teamFeedback: state.teamFeedback,
    fetchMyFeedback: () => dispatch({ type: GET_MY_FEEDBACK }),
    fetchTeamFeedback: () => dispatch({ type: GET_TEAM_FEEDBACK }),
    updateSharedFeedback: (userId, answers) =>
      dispatch({
        type: UPDATE_SHARED_FEEDBACK,
        payload: { userId, answers }
      })
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
