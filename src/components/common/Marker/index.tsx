import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles';

interface MarkerProps {
    children: React.ReactNode
}

function Marker(props: MarkerProps) {
    const { children } = props;
    const classes = useStyles();

    return <section className={classes.root}>
        {children}
    </section>
}

export default Marker