import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

/*Logo render function
    title: page name
*/
const Logo = ({ title }) => {
    return (
        <div>
            <Typography id="logo" variant="h1">{title}</Typography>
        </div>   
    )
}

Logo.propTypes = {
    title: PropTypes.string.isRequired
}

export default Logo
