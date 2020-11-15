import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'

function RoomControl() {

    return <Box display="flex">
        <Box >
            <Button variant="contained" color="primary">
                Estou pronto
            </Button>
        </Box>

        <Button variant="contained" color="secondary">
            Forcar inicio da rodada
        </Button>
    </Box>
}

export default RoomControl