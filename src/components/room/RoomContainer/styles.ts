import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },

  gameMain: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  gameMainWrapper: {
    // display="flex" flex={1} overflow="hidden "
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },

  gameInnerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: theme.spacing(6),
    border: "4px solid",
    borderLeft: 0,
    borderRadius: "0px 6px 6px 0px",

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
      borderRadius: 6,
      border: "4px solid",
    },
  },
}));
