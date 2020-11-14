import { Box, Container, Divider, LinearProgress, TextField } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { AvatarPicker } from '../AvatarPicker'
import { Button } from '../Button'
import { Logo } from '../Logo'

function Signin() {
    const router = useRouter();

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

                <Button variant="contained" color="primary" onClick={() => router.push('/room/2')}>
                    Entrar na sala
                </Button>

                <Box my={3}>
                    <Divider />
                </Box>

                <Button onClick={() => router.push('/room/2')} variant="contained" color="primary">
                    Criar sala
                </Button>
            </Box>
        </Container>
    </Box >
}

export { Signin }