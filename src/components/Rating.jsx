import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = (props) => {

    console.log("In Rating, Rating is ", props.rating);

    return (
        <div className="movie__ratings">
            {new Array(Math.floor(props.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)}
            {!Number.isInteger(props.rating) && <FontAwesomeIcon icon="star-half-alt" />}
        </div>
    )
}

export default Rating;