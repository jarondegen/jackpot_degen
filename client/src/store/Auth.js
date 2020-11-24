import Cookies from "js-cookie";

const SET_USER = "jackpotDegen/Auth/SET_USER";
const REMOVE_USER = "jackpotDegen/Auth/REMOVE_USER";
const SET_LOGGED_IN = "jackpotDegen/Auth/LOGGED_IN"

export const setLoggedIn = (value) => {
  return {
    type: SET_LOGGED_IN,
    loggedIn: value,
  }
}

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER
  }
}

export const logout = () => async dispatch => {
  await fetch('/api/session', {
    method: "DELETE"
  });
}

function loadUser() {
  const authToken = Cookies.get("token");
  if (authToken) {
    try {
      const payload = authToken.split(".")[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      return data;
    } catch (e) {
      Cookies.remove("token");
    }
  }
  return {};
}

export default function reducer(state=loadUser(), action) {
    const newState = {...state}
    switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      Cookies.remove("token");
      return {}; 
    case SET_LOGGED_IN:
      return {
        ...newState,
        loggedIn: action.loggedIn
      }
    default:
      return state;
  }
}