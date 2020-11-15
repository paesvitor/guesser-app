import { Box } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'

function RoomPlayerCard() {
    const classes = useStyles();

    return <section className={classes.root}>
        <img className={classes.image} />

        <Box ml={2}>
            <div className={classes.playerName}>Player name</div>
            <div className={classes.playerPoints}>Player points</div>
        </Box>
    </section>
}

export default RoomPlayerCard