import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'
import RoomPlayerCard from '../RoomPlayerCard'
import { useStyles } from './styles';

export interface RoomPlayerListProps {
    ranking?: boolean;
}

function RoomPlayerList(props: RoomPlayerListProps) {
    const { ranking } = props;
    const classes = useStyles(props);

    function renderPlayerCards() {
        return [Array(16).fill(0).map((_, i) => <RoomPlayerCard avatar={i + 1} ready={true} />)]
    }

    return <Box className={classes.root}>
        {!ranking && <Box mb={3}>
            <Typography variant="h3">
                Jogadores 7/8
            </Typography>
        </Box>}

        {renderPlayerCards()}
    </Box>
}

export default RoomPlayerList