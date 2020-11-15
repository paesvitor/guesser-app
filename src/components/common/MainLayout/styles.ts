import { makeStyles } from '@material-ui/core/styles';

interface MainLayoutStyleProps {
  backgroundColor: string
}

export const useStyles = makeStyles({
  root: (props: MainLayoutStyleProps) => ({
    backgroundColor: props.backgroundColor
  }),

  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'hidden',
  },

  '@global': {
    body: {
      // backgroundColor: 'cyan',
    },
  },
});

