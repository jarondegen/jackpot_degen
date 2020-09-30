
const SET_CARD_ROOM = "jackpotDegen/Auth/SET_CARD_ROOM";
const SET_CITY = "jackpotDegen/Auth/SET_CITY";
const SET_STATE = "jackpotDegen/Auth/SET_STATE"

export const setCardRoom = (value) => {
  return {
    type: SET_CARD_ROOM,
    cardRoom: value,
  }
}

export const setCity = (value) => {
  return {
    type: SET_CITY,
    city: value,
  }
}

export const setState = (value) => {
  return {
    type: SET_STATE,
    state: value
  }
}

export const getDetails = (id) => async dispatch => {
    const data = await fetch(`/api/cardrooms/${id}`);
        const {room, cityName, stateName} = await data.json();
        dispatch(setCardRoom(room))
        dispatch(setState(stateName.name))
        dispatch(setCity(cityName.name))
}

const initialState = {
    cardRoom: {},
    state:'',
    city:'',
}


export default function reducer(state=initialState, action) {
    const newState = {...state}
    switch (action.type) {
    case SET_CARD_ROOM:
      return {
          ...newState,
          cardRoom: action.cardRoom
      };
    case SET_CITY:
      return {
        ...newState,
        city: action.city
      }; 
    case SET_STATE:
      return {
        ...newState,
        state: action.state
      };
    default:
      return state;
  }
}