import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Movie from './Movie';
import Message from './../Common/Message';

const Movies = ({ movies, text }) => (
    <Fragment>
        <Message text={ text }/>
        <div className="root">
            <Grid container spacing={ 3 } justify="center" >
                {
                    movies.map(titles => {
                        const {
                            
                            title,
                            image,
                            id
                            
                        } = titles;
                        return (
                            <Movie
                                key={ id }
                                id={ id }
                                title={ title }
                                image={ image }
                            />
                        );
                    })
                }
            </Grid>
        </div>
    </Fragment>
);

Movies.displayName = 'Movies';

export default Movies;