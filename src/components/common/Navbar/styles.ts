import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgb(0 0 0 / 25%)',
    padding: theme.spacing(1),
    borderRadius: 6
  },

  logoWrapper: {
      flex: 1,
      fontSize: 19,
      color: '#000',
      fontWeight: 500,

      '& span': {
        fontWeight: 300
      }
  },

  optionsWrapper: {

  }
}));

