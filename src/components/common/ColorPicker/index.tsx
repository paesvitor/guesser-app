import { Box, Button, Menu, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from './styles';

interface NavbarProps {
}

function ColorPicker(props: NavbarProps) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <section className={classes.root}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Open Menu
            </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </section>
}

export default ColorPicker