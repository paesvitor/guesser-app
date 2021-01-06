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
  const player = useSelector((state) => state.user);

  function renderPlayerCards() {
    return room.players.map((player) => (
      <RoomPlayerCard
        isSelf={player.name === player.name}
        isOwner={player.name === room.owner.name}
        key={player.name}
        name={player.name}
        score={player.score}
        avatar={player.avatar}
        ready={true}
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
