import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonPrimary from './../Common/ButtonPrimary';

const Movie = ({ id,title, image  }) => (
    <Grid item xs={ 12 } sm={ 6 }>
        <Paper className="defaultPaper">
            <h3>{ title }</h3>
            <ul>
                <li >
                    <img alt="image" src={ image } width='80%'   /> 

                    <br></br>
                    <strong>Movie: </strong>
                    <span>{ title }</span>
                </li>
                <li>
                    <ButtonPrimary type="movies" to={ `/film/details/${ id }/${ title }` } />
                </li>
            </ul>
        </Paper>
    </Grid>
);

Movie.displayName = 'Movie';

export default Movie;