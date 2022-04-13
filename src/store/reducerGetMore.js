import {
  FETCH_GET_MORE_REQUEST,
  FETCH_GET_MORE_SUCCESS
} from './actions';

const initialState = {
  news: [],
  id: null,
  loading: false,
  error: null
}

export default function reducerGetMore(state = initialState, action) {
  switch (action.type) {
      case FETCH_GET_MORE_REQUEST:
        const {id} = action.payload;
        return {
          ...state,
          id,
          loading: true,
          error: null
        };
      case FETCH_GET_MORE_SUCCESS:
        const {news} = action.payload;
        return {
          ...state,
          news,
          id: null,
          loading: false,
          error: null
        };
    default:
      return state;
  }
}