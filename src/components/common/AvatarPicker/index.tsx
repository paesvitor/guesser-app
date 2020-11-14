import React, { useState } from 'react'
import { useStyles } from './styles'
import { Avatar as MuiAvatar, Box, Dialog, Grid, Modal, Typography } from '@material-ui/core'
import { useSelector } from '../../../utils/hooks/useSelector';
import { userActions } from '../../../store/modules/user/actions';
import { useDispatch } from 'react-redux';

export interface AvatarProps {
    size?: number;
    picker?: boolean;
}

function AvatarPicker(props: AvatarProps) {
    const classes = useStyles(props);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const userStoreState = useSelector(state => state.user);
    const dispatch = useDispatch()

    function handleSelectAvatar(id: number) {
        dispatch(userActions.setAvatar(id))
        setModalIsOpen(false)
    }

    function handleCloseModal() {
        setModalIsOpen(false)
    }

    function handleOpenModal() {
        setModalIsOpen(true)
    }

    function renderAvatars() {
        return [Array(16).fill(0).map((_, i) => <Grid item xs={6} sm={3}>
            <Box textAlign="center" mb={2}>
                <img className={classes.avatar} src={`avatars/${i + 1}.png`} onClick={() => handleSelectAvatar(i + 1)} />
            </Box>
        </Grid>)]
    }

    return <Box>
        <img className={classes.avatar} src={`/avatars/${userStoreState.avatar}.png`} onClick={handleOpenModal} />

        <Dialog open={modalIsOpen} onClose={handleCloseModal}>
            <Box p={6}>
                <Typography variant="h3" align="center">
                    Escolha seu avatar
                </Typography>
            </Box>

            <Box p={3}>
                <Grid container>
                    {renderAvatars()}
                </Grid>
            </Box>
        </Dialog>
    </Box>
}

export { AvatarPicker }