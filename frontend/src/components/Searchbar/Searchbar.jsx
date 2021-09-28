import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';

/*Searchbar: perform a search based on the criteria entered
    setSearchFilter: search filter
*/
const Searchbar = ({ setSearchFilter }) => {
    //Updates the status according to what is being entered in the TextField
    const handleChange = (e) => {
        setSearchFilter(e.target.value)
    }

    return (
        <div style={{position: 'relative', display: 'inline-block', color: "white"}}>
            <SearchIcon style={{position: 'absolute', right: 0, top: 15, width: 30, height: 30}}/>
            <TextField
                id="inputSearch"
                type="text"
                placeholder="Type movie title, genre or actor name"
                variant="outlined"
                onChange={handleChange}>             
            </TextField>
        </div>
    )
}

Searchbar.propTypes = {
    setSearchFilter: PropTypes.string.isRequired
}

export default Searchbar