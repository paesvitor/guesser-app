import { makeStyles } from "@material-ui/core/styles";
import { RoomPlayerCardProps } from ".";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },

  image: (props: RoomPlayerCardProps) => ({
    borderRadius: "50%",
    backgroundColor: "#000",
    width: 52,
    height: 52,
    border: "4px solid",
    borderColor: props.ready ? "#59d85e" : "#ff7979",
  }),

  playerName: (props: RoomPlayerCardProps) => ({
    fontWeight: 700,
    fontSize: 18,

    ...(props.isSelf && {
      color: "red",
    }),
  }),

  playerSelfName: {},

  playerPoints: {
    fontWeight: 400,
  },
}));
