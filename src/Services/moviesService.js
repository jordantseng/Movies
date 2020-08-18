import axios from 'axios';

const apiKey = 'f089cb86f51d1340efd2542476c8b983';

export default {
  getMovies: (category, page) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=${page}`;
    return axios.get(url).then(info => info.data);
  },
  getSearch: query => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;
    return axios.get(url).then(info => info.data);
  },
  getMovieById: movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`;
    return axios.get(url).then(info => info.data);
  },
  getMostVoted: () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1`;
    return axios.get(url).then(info => info.data);
  },
};
