import AsyncStorage from '@react-native-community/async-storage';

export const RESTORE_AUTH_STATE = 'RESTORE_AUTH_STATE';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
const LOGIN_KEY = 'USER_LOGIN_KEY';

export const restoreAuthState = () => {
  return async (dispatch) => {
    const isLoggedIn = await restoreAuthStateFromStorage();
    dispatch({
      type: RESTORE_AUTH_STATE,
      isLoggedIn,
    });
  };
};

export const setLoggedIn = (isLoggedIn) => {
  return async (dispatch) => {
    await cacheAuthStateToStore(isLoggedIn);
    dispatch({
      type: SET_LOGGED_IN,
      isLoggedIn,
    });
  };
};

const cacheAuthStateToStore = async (isLoggedIn) => {
  try {
    await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(isLoggedIn));
  } catch (e) {}
};

const restoreAuthStateFromStorage = async () => {
  try {
    return await AsyncStorage.getItem(LOGIN_KEY);
  } catch (e) {
    return false;
  }
};
