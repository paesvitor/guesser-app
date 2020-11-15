import { Box, Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Marker from '../../common/Marker';
import RoomControl from '../RoomControl';
import { useStyles } from './styles'

function RoomAnswerOverview() {
    const classes = useStyles();

    return <section className={classes.root}>
        <Box mb={2}>
            <Typography variant="h3">
                Reposta
            </Typography>
        </Box>

        <Box mb={3}>
            <Marker>
                6000
            </Marker>
        </Box>

        <Box mb={2}>
            <Typography variant="h3">
                Você fez 3900 pontos
            </Typography>
        </Box>

        <RoomControl />
    </section>
}

export default RoomAnswerOverview