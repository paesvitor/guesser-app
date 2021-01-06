import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { roomActions } from "../../../store/modules/room/actions";
import { useSelector } from "../../../utils/hooks/useSelector";
import Marker from "../../common/Marker";
import RoomPlayerList from "../RoomPlayerList";

function RoomEndGame() {
  const room = useSelector((state) => state.room.data);
  const playerStoreState = useSelector((state) => state.user);
  const player = room.players.find((p) => p.name === playerStoreState.name);
  const isHost = player.name === room.owner.name;

  const dispatch = useDispatch();

  const winner = room.players.reduce((prev, current) => {
    if (+current.score > +prev.score) {
      return current;
    } else {
      return prev;
    }
  });

  function handleRestart() {
    dispatch(roomActions.restart());
  }

  return (
    <Container maxWidth="xs">
      <Box mb={3}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            src={`/avatars/${winner.avatar}.png`}
            style={{ width: 90, height: 90 }}
          />
        </Box>

        <Typography variant="h3" align="center">
          Vencedor
        </Typography>
      </Box>

      <Box mb={3}>
        <Marker>{`${winner.name} com ${winner.score} pontos`}</Marker>
      </Box>

      {isHost && (
        <Button
          onClick={handleRestart}
          color="primary"
          variant="contained"
          fullWidth
        >
          Novo jogo
        </Button>
      )}
    </Container>
  );
}

export { RoomEndGame };
