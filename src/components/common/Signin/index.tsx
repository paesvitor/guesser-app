import { Box, Button, Container, Divider, TextField } from '@material-ui/core'
import React from 'react'
import { Logo } from '../Logo'

function Signin() {
    return <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
        <Box mb={6}>
            <Logo />
        </Box>

        <Container maxWidth="xs">
            <Box display="flex" flexDirection="column">
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
                    Criar sala
                </Button>
            </Box>
        </Container>
    </Box >
}

export { Signin }