import {RESTORE_AUTH_STATE, SET_LOGGED_IN} from './action';
const initialState = {
  isLoggedIn: false,
  restoring: true,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_AUTH_STATE:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        restoring: false,
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export default auth;
