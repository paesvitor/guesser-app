import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles';

interface NavbarProps {
}

function Navbar(props: NavbarProps) {
    const classes = useStyles();

    return <section className={classes.root}>
        <section className={classes.logoWrapper}>
            chutimetro.io
        </section>

        <section className={classes.optionsWrapper}>
            options
        </section>
    </section>
}

export default Navbar