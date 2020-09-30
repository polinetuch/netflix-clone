# Netflix Clone

[View App](https://netflix-clone-310da.web.app/)

### Technology Used:

    1. React JS & hooks
    2. Firebase for deployment
    3. TMDB API (The Movie Database)
    4. CSS (Flexbox)
    5. Axios
    6. movie-trailer npm
    7. react-youtube

### About the app:

This is the frontend web application of Netflix. It is built entirely on React and utilising
React modern features like hooks/ternary operator/ES6. The app queries The Movie Database API
via Axios to get different genres of movies such as Netflix Original, Trending Now, Top Rated,
Action Movies, Comedy, Horror Movies, Romance and Documentaries.

By utilising movie-trailer and react-youtube npm, the movie name gets passed as a string to
query for the video code in movie-trailer. React-youtube then plays the movie trailers that
it can find on Youtube, which is managed by an onclick event listener on the image itself.
When the image is clicked again, the trailer will close.

This app has been deployed on Firebase.
