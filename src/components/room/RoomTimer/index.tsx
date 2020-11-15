import { Box, Container, LinearProgress, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'

function RoomTimer() {
    const classes = useStyles();

    return <Container maxWidth="sm">
        <Box mb={2}>
            <Typography variant="h4" align="center">
                Tempo restante
            </Typography>
        </Box>

        <Box>
            <LinearProgress className={classes.timer} value={10} variant="determinate" />
        </Box>

        <Typography align="center">
            Rodada 6/10
        </Typography>
    </Container>
}

export default RoomTimer