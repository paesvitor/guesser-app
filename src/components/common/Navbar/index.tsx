import { Box, Button, Menu, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ColorPicker from '../ColorPicker';
import { useStyles } from './styles';

interface NavbarProps {
}

function Navbar(props: NavbarProps) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <section className={classes.root}>
        <section className={classes.logoWrapper}>
            chutimetro.<span>io</span>
        </section>

        <section className={classes.optionsWrapper}>
            <ColorPicker />
        </section>
    </section>
}

export default Navbar