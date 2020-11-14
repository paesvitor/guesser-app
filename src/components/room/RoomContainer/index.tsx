import { Box, Container, LinearProgress, Typography } from '@material-ui/core'
import React from 'react'
import RoomAnswer from '../RoomAnswer';
import RoomAnswerOverview from '../RoomAnswerOverview';
import RoomControl from '../RoomControl';
import { RoomEndGame } from '../RoomEndGame';
import RoomPlayerList from '../RoomPlayerList'
import RoomTimer from '../RoomTimer';
import { useStyles } from './styles'

function RoomContainer() {
    const classes = useStyles();

    return <Box className={classes.root}>
        <RoomTimer />

        <Box display="flex" flex={1} overflow="hidden ">
            <RoomPlayerList />

            <section className={classes.gameWrapper}>
                {/* <RoomAnswer /> */}
                {/* <RoomControl /> */}
                {/* <RoomAnswerOverview /> */}
                <RoomEndGame />
            </section>
        </Box>
    </Box>
}

export default RoomContainer