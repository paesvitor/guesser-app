import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({
   display: 'flex',
   overflow: 'hidden',
   flex: 1
  }),

  gameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    overflow: 'hidden'
  },
}));

