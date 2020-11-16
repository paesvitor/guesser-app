import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from '../../../utils/hooks/useSelector';
import RoomPlayerCard from '../RoomPlayerCard'
import { useStyles } from './styles';
export interface RoomPlayerListProps {
    ranking?: boolean;
}

function RoomPlayerList(props: RoomPlayerListProps) {
    const { ranking } = props;
    const classes = useStyles(props);
    const roomPlayers = useSelector(state => state.room.players);

    function renderPlayerCards() {
        return roomPlayers.map((player) => <RoomPlayerCard key={player.name} name={player.name} score={player.score} avatar={player.avatar} ready={true} />)
    }

    return <Box className={classes.root}>
        {!ranking && <Box mb={3}>
            <Typography variant="h3" className={classes.title}>
                Jogadores <span>{`${roomPlayers.length}/12`}</span>
            </Typography>
        </Box>}

        {renderPlayerCards()}
    </Box>
}

export default RoomPlayerList