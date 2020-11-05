import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

import { GET_ERRORS, SET_CURRENT_AGENT } from "./types";


// Register User
export const registerAgent = (agentData, history) => dispatch => {
  axios
    .post("/api/agents/agent", agentData)
    .then(res => history.push("/form-submitted"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_AGENT,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};