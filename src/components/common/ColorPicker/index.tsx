import { Box, Button, IconButton, Menu, MenuItem, TextField, Typography } from '@material-ui/core'
import clsx from 'clsx';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/modules/ui/actions';
import { useSelector } from '../../../utils/hooks/useSelector';
import { useStyles } from './styles';

const colors = [
    '#a29bfe',
    '#fd79a8',
    '#ff7675',
    '#ffeaa7',
    '#fab1a0'
]

function ColorPicker() {
    const backgroundColor = useSelector(state => state.ui.backgroundColor)
    const classes = useStyles({ backgroundColor });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch();

    const handleOpenPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        // dispatch(uiActions.setAppBackgroundColor('red'))
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handlePickColor(color: string) {
        dispatch(uiActions.setAppBackgroundColor(color));
        handleClose()
    }

    return <section className={classes.root}>
        <IconButton onClick={handleOpenPicker}>
            <section className={clsx(classes.color, classes.selectedColor)} />
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >

            {colors.map(color => <MenuItem key={color} onClick={() => handlePickColor(color)}>
                <IconButton>
                    <section className={classes.color} style={{ backgroundColor: color }} />
                </IconButton></MenuItem>)}
        </Menu>
    </section>
}

export default ColorPicker