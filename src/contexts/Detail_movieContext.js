import React, { createContext, useState, useEffect } from 'react';
import { chartMoviesGet, movieSearch } from '../constants';

export const Detail_movieContext = createContext();

const Detail_movieContextProvider = ({ children }) => {
    
    const id = window.location.pathname.split('/')[3];
    const q_movie_name = window.location.pathname.split('/')[4];
    const [doneFetchMovie, setDoneFetchMovie] = useState(false);
    const [doneFetchDetail_movie, setDoneFetchDetail_movie] = useState(false);
    const [movie, setMovie] = useState([]);
    const [detail_movie, setDetail_movie] = useState([]);

    useEffect(() => getMovie(q_movie_name), [q_movie_name]);
    useEffect(() => getDetail_movie(id), [id]);

    const getMovie = q_movie_name => {
        fetch(movieSearch(q_movie_name))
            .then(res => res.json())
            .then(data => {

                setDoneFetchMovie(true);
                !Array.isArray(data) && setMovie(data.titles);
            })
            .catch(err => console.log(err));
    };

    const getDetail_movie = id => {
        fetch(chartMoviesGet(id))
            .then(res => res.json())
            .then(data => {
                setDoneFetchDetail_movie(true);
                !Array.isArray(data) && setDetail_movie(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <Detail_movieContext.Provider value={{ doneFetchMovie, doneFetchDetail_movie, movie, detail_movie}}>
            { children }
        </Detail_movieContext.Provider>
    );
}

export default Detail_movieContextProvider;