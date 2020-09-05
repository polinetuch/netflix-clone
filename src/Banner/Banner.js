import React, { useState, useEffect } from 'react';
import axios from '../Axios/axios';
import request from '../Request/request';

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(request.fetchNetflixOriginals);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        }

        fetchData();
    }, []);
    console.log(movie);

    return (
        <header className="banner"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
            }}
        >
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
            </div>
        </header>   
    )
}

export default Banner;
