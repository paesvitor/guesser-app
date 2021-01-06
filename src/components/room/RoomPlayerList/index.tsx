import { Box, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "../../../utils/hooks/useSelector";
import RoomPlayerCard from "../RoomPlayerCard";
import { useStyles } from "./styles";

export interface RoomPlayerListProps {
  ranking?: boolean;
}

function RoomPlayerList(props: RoomPlayerListProps) {
  const { ranking } = props;
  const classes = useStyles(props);
  const room = useSelector((state) => state.room.data);
  const playerState = useSelector((state) => state.user);

  function renderPlayerCards() {
    return room.players
      .sort((a, b) => b.score - a.score)
      .map((player) => (
        <RoomPlayerCard
          isSelf={playerState.name === player.name}
          isOwner={player.name === room.owner.name}
          key={player.name}
          name={player.name}
          score={player.score}
          avatar={player.avatar}
          ready={player.hasSentHunch}
        />
      ));
  }

  return (
    <Box className={classes.root}>
      {!ranking && (
        <Box mb={3}>
          <Typography variant="h3" className={classes.title}>
            Jogadores <span>{`${room.players.length}/12`}</span>
          </Typography>
        </Box>
      )}

      {renderPlayerCards()}
    </Box>
  );
}

export default RoomPlayerList;
