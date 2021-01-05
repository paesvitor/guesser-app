import { makeStyles } from "@material-ui/core/styles";

interface MainLayoutStyleProps {
  backgroundColor: string;
}

export const useStyles = makeStyles({
  root: (props: MainLayoutStyleProps) => ({
    backgroundColor: props.backgroundColor,
    position: "relative",
  }),

  loadingWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "hidden",
    zIndex: 1,
  },

  pattern: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.2,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },

  "@global": {
    body: {
      // backgroundColor: 'cyan',
    },
  },
});
