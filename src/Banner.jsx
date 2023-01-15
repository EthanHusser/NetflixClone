import { useEffect, useState } from 'react'
import axios from './job/axios.js';
import requests from './job/request';

import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log('Data:', request.data.results)
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)
                    ]
                )
            } catch(error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header
            className='banner'
            style={{
                backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
            }}
        >
            <div className='banner-contents'>
                <h1 className='banner-title'>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className='banner-fadeBottom' />
        </header>
    )
}

export default Banner