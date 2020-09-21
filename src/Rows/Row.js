import React, { useState, useEffect } from 'react';
import axios from '../Axios/axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
         width: '100%',
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }

    
    const showData =  movies.map((movie, index) => {
        return <img 
        onClick={() => handleClick(movie)}
        key={index} src={base_url + `${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
        alt={movie.name}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        />
    });
    
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search());
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters-container">
                {showData}
            </div>
            {
                trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>
            }
        </div>
    )
}

export default Row;
