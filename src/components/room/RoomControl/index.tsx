import { Box, Button, Divider, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { roomActions } from "../../../store/modules/room/actions";
import { useSelector } from "../../../utils/hooks/useSelector";

function RoomControl() {
  const room = useSelector((state) => state.room.data);
  const dispatch = useDispatch();

  function handleNextRound() {
    dispatch(roomActions.startNextRound());
  }

  function handleFinishRound() {
    dispatch(roomActions.finishRound());
  }

  function renderButtonLabel() {
    if (room.round.current === 0) {
      return "Iniciar a partida";
    } else {
      return "Próximo Round";
    }
  }

  function renderButton() {
    if (
      room.status === "WAITING_FOR_ROUND" ||
      room.status === "WAITING_TO_START_GAME"
    ) {
      return (
        <Button variant="contained" color="primary" onClick={handleNextRound}>
          {renderButtonLabel()}
        </Button>
      );
    } else if (room.status === "READY_TO_ANSWER") {
      return (
        <Button variant="contained" color="primary" onClick={handleFinishRound}>
          Finalizar round
        </Button>
      );
    }
  }

  return (
    <Box mt={3}>
      <Divider />

      <Box mb={2} mt={2}>
        <Typography variant="h4">Você é o host da partida</Typography>
      </Box>

      <Box flex={1}>{renderButton()}</Box>
    </Box>
  );
}

export default RoomControl;
