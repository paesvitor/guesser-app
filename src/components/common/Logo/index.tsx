import { Typography } from '@material-ui/core';
import React from 'react'
import { useStyles } from './styles'

function Logo() {
    const classes = useStyles();

    return <Typography align="center" variant="h1">
        chutimetro.io
    </Typography>
}

export { Logo }