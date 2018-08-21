import React from 'react'
import { Typography } from '@material-ui/core';

const Greeting = ({playerName}) => {
    return (
        <Typography variant="headline" >
            Hello {playerName} !
        </Typography>
    )
}

export default Greeting