export const FETCH_GET_REQUEST = 'FETCH_GET_REQUEST';
export const FETCH_GET_SUCCESS = 'FETCH_GET_SUCCESS';

export const FETCH_GET_MORE_REQUEST = 'FETCH_GET_MORE_REQUEST';
export const FETCH_GET_MORE_SUCCESS = 'FETCH_GET_MORE_SUCCESS';

export const fetchGetRequest = () => ({
  type: FETCH_GET_REQUEST
});

export const fetchGetSuccess = (news) => ({
  type: FETCH_GET_SUCCESS,
  payload: {
    news
  }
});

export const fetchGetMoreRequest = (id) => ({
  type: FETCH_GET_MORE_REQUEST
});

export const fetchGetMoreSuccess = (news) => ({
  type: FETCH_GET_MORE_SUCCESS,
  payload: {
    news
  }
});