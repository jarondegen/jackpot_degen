
import Parser from 'rss-parser';

const SET_FEED = "jackpotDegen/news/SET_FEED";
const SET_IMGS = "jackpotDegen/news/SET_IMG"

export const setFeed = (value) => {
  return {
    type: SET_FEED,
    feed: value,
  }
}

export const setImg = (value) => {
  return {
    type: SET_IMGS,
    imgs: value,
  }
}
export const getFeed = () => async dispatch => {
    let parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    const data = await parser.parseURL(CORS_PROXY + 'https://www.pokernews.com/rss.php');
    dispatch(setFeed(data.items))
    const imageSources = []
    data.items.forEach(item => {
        const spliters = item.content.split(" ")
        imageSources.push(spliters[1].slice(5, -1))
    })
    dispatch(setImg(imageSources))
}


const intialState = {
  feed: [],
  imgs: []
}

export default function reducer(state=intialState, action) {
    const newState = {...state};
    switch (action.type) {
    case SET_FEED: 
    //   debugger
      return {
        ...newState,
        feed: action.feed
      }
    case SET_IMGS: 
      return {
        ...newState,
        imgs: action.imgs
      }
    default: 
      return state;
    
  }
}