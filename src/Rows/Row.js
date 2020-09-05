import React, { useState, useEffect } from 'react';
import axios from '../Axios/axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    const showData =  movies.map((movie, index) => {
        return <img 
                key={index} src={base_url + `${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                />
                
    });

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters-container">
                {showData}
            </div>
        </div>
    )
}

export default Row;
