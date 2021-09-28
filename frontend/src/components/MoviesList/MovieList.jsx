import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Movie from './../Movie'

/*MovieList: Render a list of movies
    movies: movies array 
    format data example": [
    {
        "id": 6,
        "title": "Harry Potter and the Half-Blood Prince",
        "year": 2005,
        "genres": "Action, Adventure, Fantasy, Mystery",
        "starring": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "synopsis": "As Death Eaters wreak havoc in both Muggle and Wizard worlds, Hogwarts is no longer a safe haven for students. Though Harry (Daniel Radcliffe) suspects there are new dangers lurking within the castle walls, Dumbledore is more intent than ever on preparing the young wizard for the final battle with Voldemort. Meanwhile, teenage hormones run rampant through Hogwarts, presenting a different sort of danger. Love may be in the air, but tragedy looms, and Hogwarts may never be the same again.",
        "cover": Base64String
    }
*/
const MovieList = ({ movies }) => {
    return (
        <Grid data-testid="MovieListGrid" container item direction="row" alignItems="center" justifyContent="space-between" spacing={1} style={{ margin: "5% auto auto auto" }}>
            {
                movies.map(movie => <Movie title={movie.title} starring={movie.starring} genres={movie.genres} cover={movie.cover} />)
            }
        </Grid>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList

