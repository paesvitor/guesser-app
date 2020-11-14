import { Box, Button, Container, Divider, Typography } from '@material-ui/core'
import React from 'react'
import Marker from '../../common/Marker'
import RoomPlayerList from '../RoomPlayerList'

function RoomEndGame() {
    return <Container maxWidth="xs">
        <Box mb={3}>
            <Typography variant="h3" align="center">
                Vencedor
        </Typography>
        </Box>

        <Box mb={3}>
            <Marker>
                Cezinha 8094 pontos
            </Marker>
        </Box>

        <Button color="primary" variant="contained" fullWidth>
            Novo jogo
        </Button>

        <Box my={3}>
            <Divider />
        </Box>
    </Container>
}

export { RoomEndGame }