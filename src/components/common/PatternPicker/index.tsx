import { Box, Button, IconButton, Menu, MenuItem, TextField, Typography } from '@material-ui/core'
import clsx from 'clsx';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/modules/ui/actions';
import { useSelector } from '../../../utils/hooks/useSelector';
import { useStyles } from './styles';

const patterns = [
    'jigsaw',
    'food',
    'tic',
    'waves',
    'floor'
]

function PatternPicker() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch();
    const appBackgroundColor = useSelector(state => state.ui.backgroundColor)

    const handleOpenPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handlePickPattern(pattern: string) {
        dispatch(uiActions.setAppBackgroundImage(pattern));
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

            {patterns.map(pattern => <MenuItem key={pattern} onClick={() => handlePickPattern(pattern)}>
                <IconButton>
                    <section className={clsx(classes.color, classes.patternOnPicker)} style={{ backgroundColor: appBackgroundColor, backgroundImage: `url("/patterns/${pattern}.svg")` }} />
                </IconButton>
            </MenuItem>)}
        </Menu>
    </section>
}

export default PatternPicker