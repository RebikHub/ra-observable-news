import {
  FETCH_GET_REQUEST,
  FETCH_GET_SUCCESS,
} from './actions';

const initialState = {
  news: [],
  loading: false,
  error: null
};

export default function reducerGet(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      case FETCH_GET_SUCCESS:
        const {news} = action.payload;
        return {
          ...state,
          news,
          loading: false,
          error: null
        };
    default:
      return state;
  }
}