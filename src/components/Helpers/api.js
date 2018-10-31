import axios from 'axios';

// later on these values can be set through .env variable so that we don't expose them
const omdbApiKey = 'f0a7681f';
const omdbId = 'tt3896198';
const baseUrl = 'http://www.omdbapi.com/';

export const fetchMovies = async (input) => {
  const res = await axios.get(baseUrl, {
    params: {
      i: omdbId,
      apikey: omdbApiKey,
      t: input
    }
  });
  const { data } = res;
  const output = `${data.Plot} \n Released on ${data.Released}. \n Genre: ${data.Genre} `;
  return output;
}

export const AwesomeApis = {
  loadMovieInfo: fetchMovies
}


