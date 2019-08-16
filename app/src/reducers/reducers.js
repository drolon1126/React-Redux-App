import { FETCH_ANIME_DATA_START, FETCH_ANIME_DATA_SUCCESS, PAGE_INCREMENT, PAGE_DECREMENT, PAGE_JUMP } from '../actions/actions';

const initialState = {
  isLoading: false,
  animes: [],
  pageNo: 1,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_ANIME_DATA_SUCCESS:
      console.log("the thing: ", action.payload);
      return {
        ...state,
        isLoading: false,
        animes: action.payload,
        error: ''
      };
    case PAGE_INCREMENT:
      const tmp = state.pageNo + 1;
      console.log('page', tmp);
      return {
        ...state,
        pageNo: tmp
      };
    case PAGE_DECREMENT:
        const tmp2 = state.pageNo - 1<1 ? 1 : state.pageNo - 1;
        console.log('page', tmp2);
      return {
        ...state,
        pageNo: tmp2
      };
    case PAGE_JUMP:
      return{
        ...state,
        pageNo: action.payload
      }
    default:
      return state;
  }
};

export default reducer;