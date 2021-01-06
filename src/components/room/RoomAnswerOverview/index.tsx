import { Box, Button, Divider, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "../../../utils/hooks/useSelector";
import Marker from "../../common/Marker";
import RoomControl from "../RoomControl";
import { useStyles } from "./styles";

function RoomAnswerOverview() {
  const classes = useStyles();
  const room = useSelector((state) => state.room.data);
  const playerStoreState = useSelector((state) => state.user);
  const player = room.players.find((p) => p.name === playerStoreState.name);

  return (
    <section className={classes.root}>
      <Box mb={2}>
        <Typography variant="h3">Pergunta</Typography>
      </Box>

      <Box mb={3}>
        <Marker>{room.round.question.text}</Marker>
      </Box>

      <Box mb={2}>
        <Typography variant="h3">Reposta</Typography>
      </Box>

      <Box mb={3}>
        <Marker>
          <Typography variant="h3">{room.round.question.answer}</Typography>
        </Marker>
      </Box>

      <Box mb={2}>
        <Typography variant="h3">Você fez</Typography>
      </Box>

      <Box mb={3}>
        <Marker>{`${player.roundScore} pontos`}</Marker>
      </Box>
    </section>
  );
}

export default RoomAnswerOverview;
