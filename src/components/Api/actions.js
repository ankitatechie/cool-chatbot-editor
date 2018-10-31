import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from './constants';

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST,
    isFetching: true
  };
}

export function fetchDataSuccess() {
  return {
    type: FETCH_DATA_SUCCESS,
    isFetching: false
  };
}

export function fetchDataFailure(error) {
  return {
    type: FETCH_DATA_FAIL,
    error,
  };
}

// async function goes here
export function fetchMovieData(input) {
  return async(dispatch) => {
    try {
      const baseUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=f0a7681f&t=${input}`;
      dispatch(fetchDataRequest());
      const data = await axios.get(baseUrl);
      const output = `${data.Plot} \n Released on ${data.Released}. \n Genre: ${data.Genre} `
      dispatch(fetchDataSuccess(output));
    } catch (err) {
      dispatch(fetchDataFailure(err));
    }
  }
}
