import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Searchbar from './../components/Searchbar'
import MovieList from './../components/MoviesList'
import Logo from './../components/Logo'

//MainPage: main page of the application, assemble the rest of the components
const MainPage = () => {
    //Hook definition for the TextField state
    const [searchFilter, setSearchFilter] = useState("all")
    //Hook definition for the allMovies array state
    const [allMovies, setAllMovies] = useState([])

    //Makes a request to the API and updates the allMovies state with the returned data
    const getMovies = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.data !== null)
                    setAllMovies(data.data)
            })
    }

    //Hook to keep updating the allMovies state according to the search filter
    useEffect(() => {
        getMovies(`https://localhost:44317/Movies?search=${searchFilter}`)
    }, [searchFilter])

    return (
        <div style={{ maxWidth: "100%", margin: "auto" }}>
            <Grid container justifyContent="space-between" alignItems="center" direction="column">
                <Grid item md={12}>
                    <Logo title="Movies+"></Logo>
                </Grid>
                <Grid item md={12}>
                    <Searchbar searchFilter={searchFilter} setSearchFilter={setSearchFilter}></Searchbar>
                </Grid>
                <Grid item md={12}>
                    <MovieList movies={allMovies}></MovieList>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPage
