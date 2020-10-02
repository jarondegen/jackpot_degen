
const SET_BIG = "jackpotDegen/jackpot/SET_BIG";
const SET_SUBS = "jackpotDegen/jackpot/SUBS"
const SET_CHART_ID = "jackpotDegen/jackpot/SET_CHART_ID"
const SET_REPORT_MADE = "jackpotDegen/jackpot/REPORT_MADE"

export const setReportMade = (value) => {
  return {
    type: SET_REPORT_MADE,
    reportMade: value
  }
}

export const setChartId = (value) => {
  return {
    type: SET_CHART_ID,
    roomId: value
  }
}

export const setBig = (value) => {
  return {
    type: SET_BIG,
    big: value,
  }
}

export const setSubs = (value) => {
  return {
    type: SET_SUBS,
    subs: value,
  }
}

export const getBig = () => async dispatch => {
    const data = await fetch('/api/dashboard/big');
    if (data.ok) {
        const bigJackpot = await data.json();
        // debugger
        dispatch(setBig(bigJackpot))
    }
}

export const getSubs = (id) => async dispatch => {
  const response = await fetch(`/api/dashboard/${id}`);
  if (response.ok) {
      const { roomNames, jackpots, subsArr } = await response.json();
      dispatch(setSubs({roomNames, jackpots, subsArr}));
      
  }
}

const intialState = {
  big: {
    city: '',
    reporter: '',
    amount: '',
    room: '',
  },
  subs: {
    roomNames: [],
    jackpots: [{hit:false}],
    roomId: 1
  },
  reportMade: false
}

export default function reducer(state=intialState, action) {
    const newState = {...state};
    switch (action.type) {
    case SET_BIG: 
    //   debugger
      return {
        ...newState,
        big: action.big
      }
    case SET_SUBS: 
      return {
        ...newState,
        subs: action.subs
      }
    case SET_CHART_ID:
      return {
        ...newState,
        roomId: action.roomId
      }
    case SET_REPORT_MADE:
      return {
        ...newState,
        reportMade: action.reportMade
      }
    default: 
      return state;
    
  }
}