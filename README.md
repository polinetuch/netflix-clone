# Netflix Clone

### Technology Used:

    1. React JS
    2. Firebase
    3. TMDB API (The Movie Database)
    4. CSS (Flexbox)
    5. Axios

### Fetching requests from API:

    1. Set up an account on TMDB to get an API Key
    2. With the key, set up all requests from API with the following:
    ```
    const api_key = "00dc8509ab90db912ef968f68b9baec3";
    const requests = {
        fetchTrending: `/trending/all/week?api_key=${api_key}&language=enUS`,
        fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
        fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
        fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
        fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
        fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
    };
    ```
