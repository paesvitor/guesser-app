import { Box, Button, CircularProgress, Container, Divider, LinearProgress, TextField } from '@material-ui/core'
import React from 'react'
import { AvatarPicker } from '../AvatarPicker'
import { Logo } from '../Logo'

function Signin() {
    return <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
        <Box mb={6}>
            <Logo />
        </Box>

        <Container maxWidth="xs">
            <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center" mb={3}>
                    <AvatarPicker />
                </Box>

                <Box mb={3}>
                    <TextField fullWidth label="Nome do jogador" variant="outlined" />
                </Box>

                <Box mb={3}>
                    <TextField fullWidth label="Código da sala" variant="outlined" />
                </Box>

                <Button variant="contained" color="primary">
                    Entrar na sala
                </Button>

                <Box my={3}>
                    <Divider />
                </Box>

                <Button variant="contained" color="primary">
                    <Box width="100%" pt={1}>
                        <CircularProgress size={24} color="secondary" />
                    </Box>
                </Button>
            </Box>
        </Container>
    </Box >
}

export { Signin }