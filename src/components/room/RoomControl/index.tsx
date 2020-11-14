import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'

function RoomControl() {

    return <Box display="flex">
        <Box flex={1}>
            <Button fullWidth variant="contained" color="primary">
                Estou pronto
            </Button>
        </Box>

        <Box flex={1}>
            <Button fullWidth variant="contained" color="secondary">
                Forcar inicio da rodada
        </Button>
        </Box>
    </Box>
}

export default RoomControl