import axios from 'axios';
import {apiKey} from '../constants';

const apiBaseUrl = 'https://api.themoviedb.org/3';

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upComingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

//movie

const movieDetailsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;

const similarMoviesEndpoint = id =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

const movieCreditsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;

const personDetailEndpoint = id =>
  `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;

const personMoviesEndpoint = id =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  };

  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.log('Error API Call', error);
    return {};
  }
};

// Home Screen API
export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};
export const fetchUpComingMovies = () => {
  return apiCall(upComingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

// Search Screens API

export const searchMovies = params => {
  return apiCall(searchMoviesEndpoint, params);
};

//Moviews API

export const fetchMovieDetails = id => {
  return apiCall(movieDetailsEndpoint(id));
};

export const fetchSimilarMovies = id => {
  return apiCall(similarMoviesEndpoint(id));
};

export const fetchCredits = id => {
  return apiCall(movieCreditsEndpoint(id));
};

//fallback Images

export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

export const fallbackPoster =
  'https://img.freepik.com/free-vector/man-saying-no-concept-illustration_114360-14192.jpg';

// Person APIS

export const fetchPersonDetails = id => {
  return apiCall(personDetailEndpoint(id));
};

export const fetchPersonMovies = id => {
  return apiCall(personMoviesEndpoint(id));
};
