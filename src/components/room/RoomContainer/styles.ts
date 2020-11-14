import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({
   display: 'flex',
   flexDirection: 'column',
   height: '100%',
   overflow: 'hidden',
   flex: 1,
  }),

  gameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: theme.spacing(6),
    border: '4px solid',
    borderLeft: 0,
    borderRadius: '0px 6px 6px 0px'
  },
}));

