import { Box } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { RoomPlayerListProps } from "../RoomPlayerList";
import { useStyles } from "./styles";

export interface RoomPlayerCardProps {
  ready: boolean;
  avatar: number;
  name: string;
  score: number;
  isSelf: boolean;
  isOwner: boolean;
}

function RoomPlayerCard(props: RoomPlayerCardProps) {
  const { avatar, name, score, isSelf, isOwner } = props;

  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <img className={classes.image} src={`/avatars/${avatar}.png`} />

      <Box ml={2}>
        <div
          className={clsx(classes.playerName, isSelf && classes.playerSelfName)}
        >{`${name} ${isOwner ? "(O)" : ""}`}</div>
        <div className={classes.playerPoints}>{`${score} pontos`}</div>
      </Box>
    </section>
  );
}

export default RoomPlayerCard;
