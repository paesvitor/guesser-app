import { Box, Button, Divider, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Marker from "../../common/Marker";
import { useStyles } from "./styles";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../utils/hooks/useSelector";
import { roomActions } from "../../../store/modules/room/actions";

function RoomAnswer() {
  const classes = useStyles();
  const [answer, setAnswer] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room.data);
  const playerStoreState = useSelector((state) => state.user);
  const player = room.players.find((p) => p.name === playerStoreState.name);

  function handleSetAnswer(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(e.target.value);
  }

  function handleSubmitAnswer(e: React.FormEvent) {
    e.preventDefault();
    if (!answer) {
      enqueueSnackbar("Você não pode enviar um palpite em branco.", {
        variant: "error",
      });
    } else {
      dispatch(roomActions.answer(answer));
    }
  }

  return (
    <section className={classes.root}>
      <Box mb={2}>
        <Typography variant="h3">Categoria</Typography>
      </Box>

      <Box mb={2}>
        <Marker>{room.round.question.category}</Marker>
      </Box>

      <Box mb={2}>
        <Typography variant="h3">Pergunta</Typography>
      </Box>

      <Box mb={3}>
        <Marker>{room.round.question.text}</Marker>
      </Box>

      {!player.hasSentHunch ? (
        <>
          <Box mb={2}>
            <Typography variant="h3">Seu palpite</Typography>
          </Box>

          <form onSubmit={handleSubmitAnswer}>
            <Box mb={3}>
              <TextField
                value={answer}
                onChange={handleSetAnswer}
                type="number"
                fullWidth
                variant="outlined"
              />
            </Box>

            <Button fullWidth variant="contained" color="primary" type="submit">
              Enviar palpite
            </Button>
          </form>
        </>
      ) : (
        <Box>
          <Box mb={2}>
            <Divider />
          </Box>

          <Typography variant="h4">
            Você já enviou seu palpite, aguarde o fim da rodada.
          </Typography>
        </Box>
      )}
    </section>
  );
}

export default RoomAnswer;
