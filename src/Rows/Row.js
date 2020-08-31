import React, { useState, useEffect } from 'react';
import axios from '../Axios/axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters-container">
            {
                movies.map((movie, index) => {
                    return <img 
                            key={index} src={base_url + movie.poster_path} 
                            alt={movie.name}
                            className="row__poster"
                            />
                })
            }
            </div>
        </div>
    )
}

export default Row;
