import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        error: 'some error occured',
      }
    default:
      return state;
  }
}