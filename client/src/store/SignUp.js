
const SET_EMAIL = "jackpotDegen/signUp/SET_EMAIL";
const SET_USERNAME = "jackpotDegen/signUp/SET_USERNAME";
const SET_PASSWORD = "jackpotDegen/signUp/SET_PASSWORD";
const SET_CONFIRM_PASSWORD = "jackpotDegen/signUp/SET_CONFIRM_PASSWORD";
const SET_STATE = "jackpotDegen/signUp/SET_STATE";
const SET_CITY = "jackpotDegen/signUp/SET_CITY";
const SET_STATES = "jackpotDegen/signUp/SET_STATES";
const SET_CITIES = "jackpotDegen/signUp/SET_CITIES";

export const setStates = (value) => {
    return {
      type: SET_STATES,
      states: value,
    }
}
export const setState = (value) => {
    return {
      type: SET_STATE,
      state: value,
    }
}
export const setCity = (value) => {
    return {
      type: SET_CITY,
      city: value,
    }
}
export const setCities = (value) => {
    return {
      type: SET_CITIES,
      cities: value,
    }
}
export const setEmail = (value) => {
    return {
      type: SET_EMAIL,
      email: value,
    }
}
export const setUserName = (value) => {
    return {
      type: SET_USERNAME,
      userName: value,
    }
}

export const setPassword = (value) => {
    return {
      type: SET_PASSWORD,
      password: value,
    }
}

export const setConfirmPassword = (value) => {
    return {
      type: SET_CONFIRM_PASSWORD,
      confirmPassword: value,
    }
}

export const getStates = () => async dispatch => {
    const data = await fetch('/api/states');
    const { statesArr } = await data.json()
    dispatch(setStates(statesArr))
};

export const getCities = (state) => async dispatch => {
  const theState = state[1]  
  const data = await fetch('/api/cities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theState }),
      });
    if (data.ok) {
        const { citiesArr } = await data.json();
        if (citiesArr.length !== 0){
            dispatch(setCities(citiesArr));
        };
    };
};

const initialState = {
    states: [['Select State', 1]],
    cities: [['Select City', 1]],
    state: '',
    city: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export default function reducer(state=initialState, action) {
    const newState = {...state};
    switch (action.type) {
    case SET_EMAIL: 
      return {
        ...newState,
        email: action.email
      };
    case SET_USERNAME: 
      return {
        ...newState,
        userName: action.userName
      };  
    case SET_PASSWORD:
      return {
        ...newState,
        password: action.password
      }
    case SET_CONFIRM_PASSWORD:
      return {
        ...newState,
        confirmPassword: action.confirmPassword
      }
    case SET_STATE:
      return {
        ...newState,
        state: action.state
      }
    case SET_STATES:
      return {
        ...newState,
        states: action.states
      }
    case SET_CITY:
      return {
        ...newState,
        city: action.city
      }
    case SET_CITIES:
      return {
        ...newState,
        cities: action.cities
      }
    default: 
      return state;
    
  }
}