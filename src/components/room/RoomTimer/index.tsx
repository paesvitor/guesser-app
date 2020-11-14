import { Box, Container, LinearProgress, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'


function RoomTimer() {
    const classes = useStyles();

    return <Box pt={2}>
        <Typography align="center">
            Rodada 6/10
        </Typography>

        <Box mb={1}>
            <Typography variant="h4" align="center">
                Tempo restante
            </Typography>
        </Box>

        <Box mb={3}>
            <LinearProgress className={classes.timer} value={10} variant="determinate" />
        </Box>
    </Box>
}

export default RoomTimer