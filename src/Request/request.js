const api_key = "00dc8509ab90db912ef968f68b9baec3";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=enUS`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&width_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&width_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&width_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}width_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}width_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_key}width_genres=99`,
};

export default requests;