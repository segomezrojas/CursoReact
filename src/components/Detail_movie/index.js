import React, { Fragment, useContext } from 'react';
import { Detail_movieContext } from '../../contexts/Detail_movieContext';
import ProgressBar from '../Common/ProgressBar';
import Message from '../Common/Message';
import ButtonPrimary from '../Common/ButtonPrimary';
import Details from './Details';

const Detail_movie = () => {
    const { doneFetchMovie, doneFetchDetail_movie, movie, detail_movie } = useContext(Detail_movieContext);
    return (
        <Fragment>
            {
                doneFetchMovie && doneFetchDetail_movie ?
                    ((movie) && (detail_movie) ?
                        <Details movie={ movie } detail_movie={ detail_movie } />
                    : 
                        <Message text="No Results"/>)
                : 
                    <ProgressBar />
                    
            }
            <ButtonPrimary type="Back" to="/" />
        </Fragment>
    );
};

Detail_movie.displayName = 'Details';

export default Detail_movie;