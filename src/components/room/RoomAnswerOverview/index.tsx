import { Box, Button, Divider, TextField, Typography } from "@material-ui/core";
import React from "react";
import Marker from "../../common/Marker";
import RoomControl from "../RoomControl";
import { useStyles } from "./styles";

function RoomAnswerOverview() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Box mb={2}>
        <Typography variant="h3">Pergunta</Typography>
      </Box>

      <Box mb={3}>
        <Marker>Quantas pessoas se chamam LUCAS?</Marker>
      </Box>

      <Box mb={2}>
        <Typography variant="h3">Reposta</Typography>
      </Box>

      <Box mb={3}>
        <Marker>6000</Marker>
      </Box>

      <Box mb={2}>
        <Typography variant="h3">Você fez</Typography>
      </Box>

      <Box mb={3}>
        <Marker>630 pontos</Marker>
      </Box>
    </section>
  );
}

export default RoomAnswerOverview;
