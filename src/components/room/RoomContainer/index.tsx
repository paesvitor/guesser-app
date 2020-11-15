import { Box, Container, LinearProgress, Typography } from '@material-ui/core'
import React from 'react'
import RoomAnswer from '../RoomAnswer';
import RoomAnswerOverview from '../RoomAnswerOverview';
import RoomControl from '../RoomControl';
import RoomPlayerList from '../RoomPlayerList'
import RoomTimer from '../RoomTimer';
import { useStyles } from './styles'

function RoomContainer() {
    const classes = useStyles();

    return <Box flex={1} display="flex" flexDirection="column" py={2}>
        <RoomTimer />

        <Box display="flex" flex={1}>
            <RoomPlayerList />

            <section className={classes.gameWrapper}>
                {/* <RoomAnswer /> */}
                {/* <RoomControl /> */}
                <RoomAnswerOverview />
            </section>
        </Box>
    </Box>
}

export default RoomContainer