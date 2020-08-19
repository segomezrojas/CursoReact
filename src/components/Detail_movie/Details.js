import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import trail from './../../assets/img/trailer.png';
import { Link } from 'react-router-dom';

const Details = ({ movie, detail_movie }) => {
    //const { id, title, imagen} = movie;
    const { title,year,length,rating,rating_votes,plot,poster,trailer } = detail_movie;


    return (
        <Paper className="paper defaultPaper">
            <strong className="title">{`${ title }`}</strong><br></br>

            <img alt="image" src={ poster } width="500" height="500" />
                    <br></br>

            <ul>
                <li>
                   <strong>Title Film:</strong> 
                   <span>{ title }</span>
                </li>
                {
                    <li>
                        <strong>Year Film:</strong>
                        <span>{ year }</span>
                    </li>
                }
                <li>
                    <strong>Length:</strong>
                    <span>{ length }</span>
                </li>
                {
                    <li>
                        <strong>Rating:</strong>
                        <span>{ rating }</span>
                    </li>
                }

                <li>
                    <strong>Rating Votes:</strong>
                    <span>{ rating_votes }</span>
                </li>
                {
                    <li>
                        <strong>Plot:</strong>
                        <span>{ plot }</span>
                    </li>
                }

                <li>
                    <strong>Trailer:</strong>
                    <a href={`${ trailer.link}`} target="_blank" class="button">Go to Trailer</a>
                </li>

            </ul>
        </Paper>
    );
}

Details.displayName = 'Details';

export default Details;
