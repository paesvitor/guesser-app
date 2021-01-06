import { Box, Container, LinearProgress, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import RoomAnswer from "../RoomAnswer";
import RoomAnswerOverview from "../RoomAnswerOverview";
import RoomControl from "../RoomControl";
import { RoomEndGame } from "../RoomEndGame";
import RoomPlayerList from "../RoomPlayerList";
import RoomTimer from "../RoomTimer";
import { useStyles } from "./styles";
import { io } from "socket.io-client";
import { useSelector } from "../../../utils/hooks/useSelector";
import { useDispatch } from "react-redux";
import { roomActions } from "../../../store/modules/room/actions";
import RoomGameStart from "../RoomGameStart";

function RoomContainer() {
  const classes = useStyles();
  const roomStoreState = useSelector((state) => state.room);
  const playerStoreState = useSelector((state) => state.user);
  const socket = io(`ws://127.0.0.1:3001`);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.connect();

    socket.on(`${roomStoreState.data.code}/update`, (data) => {
      dispatch(roomActions.update(data));
    });
  }, []);

  function renderRoomState() {
    switch (roomStoreState.data.status) {
      case "WAITING_TO_START_GAME":
        return <RoomGameStart />;
      case "READY_TO_ANSWER":
        return <RoomAnswer />;
      case "WAITING_FOR_ROUND":
        return <RoomAnswerOverview />;
      case "GAME_OVER":
        return <RoomEndGame />;
    }
  }

  function renderGameControl() {
    if (
      roomStoreState.data.owner.name === playerStoreState.name &&
      roomStoreState.data.status !== "GAME_OVER"
    ) {
      return <RoomControl />;
    }

    return null;
  }

  return (
    <Box className={classes.root}>
      <RoomTimer />

      <Box display="flex" flex={1} overflow="hidden ">
        <RoomPlayerList />

        <section className={classes.gameWrapper}>
          {renderRoomState()}
          {renderGameControl()}
        </section>
      </Box>
    </Box>
  );
}

export default RoomContainer;
