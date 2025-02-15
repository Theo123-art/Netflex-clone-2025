// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "ce50326fcd3b02eee9033b487d9589ea";
console.log(API_KEY);

const Requested = {
  fetchingTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_networks=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_networks=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_networks=10749`,
  fetchiDocumentaries: `/discover/tv?api_key=${API_KEY}&with_networks=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US`,
};
export default Requested;
