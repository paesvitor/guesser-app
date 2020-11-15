import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  }),

  image: {
    borderRadius: '50%',
    backgroundColor: '#000',
    width: 48,
    height: 48,
    border: '4px solid #DE3232'
  },

  playerName: {
    fontWeight: 700,
    fontSize: 18
  },

  playerPoints: {
    fontWeight: 400
  }
}));

