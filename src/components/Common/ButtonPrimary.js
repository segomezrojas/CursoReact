import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import movies from './../../assets/img/movie.png';
import back from './../../assets/img/back.png';

const ButtonPrimary = ({ type, to }) => (
    <Link className="buttonPrimary" to={ to } >
        <Button variant="contained" >
            <img alt={type === 'movies' ? ' Movie details' : 'Back'} src={ type === 'movies' ? movies : back } />
            { type === 'movies' ? ' Movie details' : ' Back' }
        </Button>
    </Link>
);

ButtonPrimary.displayName = 'ButtonPrimary';

export default ButtonPrimary;