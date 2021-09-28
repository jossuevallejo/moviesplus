import React from 'react'
import PropTypes from 'prop-types'

const MovieDetails = ({ duration, synopsis, year }) => {
    return (
        <div>
            <p>{duration}</p>
            <p>{synopsis}</p>
            <p>{year}</p>
        </div>
    )
}

MovieDetails.propTypes = {
    duration: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}

export default MovieDetails
