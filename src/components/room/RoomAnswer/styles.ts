import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({
  }),

  category: {
    height: 60,
    display: 'flex',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    borderRadius: 6,
    fontSize: 27,
    fontWeight: 700
  }
}));

