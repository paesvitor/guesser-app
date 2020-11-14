import { Box } from '@material-ui/core'
import React from 'react'
import { RoomPlayerListProps } from '../RoomPlayerList';
import { useStyles } from './styles'

export interface RoomPlayerCardProps {
    ready: boolean,
    avatar: number;
}

function RoomPlayerCard(props: RoomPlayerCardProps) {
    const { avatar } = props;

    const classes = useStyles(props);

    return <section className={classes.root}>
        <img className={classes.image} src={`/avatars/${avatar}.png`} />

        <Box ml={2}>
            <div className={classes.playerName}>Player name</div>
            <div className={classes.playerPoints}>Player points</div>
        </Box>
    </section>
}

export default RoomPlayerCard