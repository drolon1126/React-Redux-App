import axios from 'axios';

export const FETCH_ANIME_DATA_START = 'FETCH_ANIME_DATA_START';
export const FETCH_ANIME_DATA_SUCCESS = 'FETCH_ANIME_DATA_SUCCESS';
export const FETCH_ANIME_DATA_FAILURE = 'FETCH_ANIME_DATA_FAILURE';
export const PAGE_INCREMENT = 'PAGE_INCREMENT';
export const PAGE_DECREMENT = 'PAGE_DECREMENT';
export const PAGE_JUMP = 'PAGE_JUMP';

export const getData = (pageNo) => {
  return dispatch => {
    dispatch({ type: FETCH_ANIME_DATA_START });
    axios
      .get(`https://api.jikan.moe/v3/search/anime?order_by=title&page=${pageNo}`)
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_ANIME_DATA_SUCCESS, payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: FETCH_ANIME_DATA_FAILURE, payload: err.response });
      });
  };
};

export const pageChange = (direction, page=1) =>{
  switch(direction){
    case 'increment':
        return {
          type: PAGE_INCREMENT
        }
    case 'decrement':
        return {
          type: PAGE_DECREMENT
        }
    case 'jump':
      return {
        type: PAGE_JUMP,
        payload: page
      }
  }
}

