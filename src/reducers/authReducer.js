import isEmpty from "../validation/is-empty";

import { SET_CURRENT_AGENT } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  agent: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_AGENT:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        agent: action.payload
      };
    default:
      return state;
  }
}
