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
    width: 48,
    height: 48,
    border: "4px solid",
    borderColor: props.ready ? "green" : "red",
  }),

  playerName: {
    fontWeight: 700,
    fontSize: 18,
  },

  playerSelfName: {
    color: "red",
  },

  playerPoints: {
    fontWeight: 400,
  },
}));
