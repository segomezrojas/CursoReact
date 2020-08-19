import React, { Fragment, useContext } from 'react';
import { FilmsContext } from './../../contexts/FilmsContext';
import SearchFilms from './SearchMovies';
import Movies from './Movies';
import ProgressBar from './../Common/ProgressBar';
import Message from './../Common/Message';

const Films = () => {
    const { validateQMovie, doneFetch, movies, text } = useContext(FilmsContext);
    return (
        <Fragment>
            <SearchFilms validateQMovie={ validateQMovie } />
            {
                doneFetch ?
                    (movies.length ? <Movies text={ text } movies={ movies } /> : <Message text={ text } />)
                :
                    <ProgressBar />
            }
        </Fragment>
    );
}

Films.displayName = 'Films';

export default Films;