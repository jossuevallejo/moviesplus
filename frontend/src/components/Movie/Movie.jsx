import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

/*Movie Render function
    Title: movie original title
    Starring: movie actors
    Genres: all genres tagged to the movie
    Cover: movie cover
*/
const Movie = ({ title, starring, genres, cover }) => {
    return (
        <div style={{margin: "0 auto 5% auto"}}>
            <img src={`data:image/jpg;base64,${cover}`} alt={`${title}-cover`} height={"450"} width={"330"} />
            <Typography className="descriptionMovie" style={{ fontSize: "1rem", color: "#00bfff" }} variant="h4">{title}</Typography>
            <Typography className="descriptionMovie" style={{ fontSize: "0.8rem" }} variant="h5"><strong>Starring: </strong>{starring}</Typography>
            <Typography className="descriptionMovie" style={{ fontSize: "0.8rem" }} variant="h5"><strong>Genres: </strong>{genres}</Typography>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    cover: PropTypes.string
}

export default Movie
