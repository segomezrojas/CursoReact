import React, { createContext, useState, useEffect } from 'react';
import {movieSearch} from './../constants';

export const FilmsContext = createContext();

const FilmsContextProvider = ({ children }) => {

    const [doneFetch, setDoneFetch] = useState();
    const [currentQFilm, setCurrentQFilm] = useState('');
    const [text, setText] = useState('Search Movie');
    const [movies, setFilms] = useState([]);

    useEffect(() => getFilms(), []);

    const getFilms = q_movie_name => {
     if(q_movie_name !== undefined)
     {
       fetch(movieSearch(q_movie_name))
        .then(res => res.json())
        .then(data => {
            setDoneFetch(true);
            setText(data.titles.length ? 'RESULTS': 'NO RESULTS' );
            setFilms(data.titles);
        })
        .catch(err => console.log(err));
     }
     else
     {
        setDoneFetch(true);
         return;
     }
    }


    const validateQMovie = (e, q_movie_name = document.querySelector('#q_movie_name').value.toLowerCase().trim()) => {       
            setCurrentQFilm(q_movie_name);
            setDoneFetch(false);
            getFilms(q_movie_name);       
    }

    return (
        <FilmsContext.Provider value={{ doneFetch, text, movies, validateQMovie}}>
        { children }
        </FilmsContext.Provider>

    );

};

export default FilmsContextProvider;
