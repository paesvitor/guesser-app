import { Box, Container, Divider, TextField } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../../store/modules/user/actions'
import { useSelector } from '../../../utils/hooks/useSelector'
import { AvatarPicker } from '../AvatarPicker'
import { Button } from '../Button'
import { useSnackbar } from 'notistack';
import { Logo } from '../Logo'
import ColorPicker from '../ColorPicker'
import PatternPicker from '../PatternPicker'
import firebase from 'firebase'

function Signin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const userStoreState = useSelector(state => state.user);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [roomCode, setRoomCode] = useState('');
    const ref = firebase.database().ref("rooms");

    function validateRoomCode() {
        if (!roomCode) {
            return false;
        }

        return true
    }

    function emitJoinRoom() {
        // router.push('/room/3901')
    }

    function handleJoinRoom(e: React.FormEvent) {
        e.preventDefault();

        if (!userStoreState.name) {
            enqueueSnackbar('Preencha um nome antes de entrar na sala', { variant: 'error' })
        } else if (!validateRoomCode()) {
            enqueueSnackbar('Preencha um código da sala válido', { variant: 'error' })
        } else if (userStoreState.name.length > 12) {
            enqueueSnackbar('Nome muito longo, o máximo de caracteres permitido é 12.', { variant: 'error' })
        } else {
            emitJoinRoom()
        }
    }

    function validateCanCreateOrJoinRoom() {
        if (!userStoreState.name) {
            enqueueSnackbar('Preencha um nome antes de entrar na sala', { variant: 'error' });
            return false;
        } else if (userStoreState.name.length > 12) {
            enqueueSnackbar('Nome muito longo, o máximo de caracteres permitido é 12.', { variant: 'error' });
            return false;
        } else {
            return true
        }
    }

    async function handleCreateRoom() {
    }

    function handleChangeUsername(username: string) {
        dispatch(userActions.setUsername(username))
    }

    function handleChangeRoomCode(value: string) {
        setRoomCode(value)
    }

    return <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
        <Box mb={6}>
            <Logo />
        </Box>

        <Container maxWidth="xs">
            <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center" mb={3}>
                    <AvatarPicker />
                </Box>

                <form onSubmit={handleJoinRoom}>
                    <Box mb={3}>
                        <TextField value={userStoreState.name} fullWidth label="Nome do jogador" variant="outlined" onChange={e => handleChangeUsername(e.target.value)} />
                    </Box>

                    <Box mb={3}>
                        <TextField value={roomCode} fullWidth label="Código da sala" variant="outlined" onChange={e => handleChangeRoomCode(e.target.value)} />
                    </Box>

                    <Button fullWidth variant="contained" color="primary" type="submit">
                        Entrar na sala
                    </Button>
                </form>

                <Box my={3}>
                    <Divider />
                </Box>

                <Button loading={loading} onClick={handleCreateRoom} variant="contained" color="primary">
                    Criar sala
                </Button>

                <Box mt={3} justifyContent="center" display="flex">
                    <ColorPicker />
                    <PatternPicker />
                </Box>
            </Box>
        </Container>
    </Box >
}

export { Signin }