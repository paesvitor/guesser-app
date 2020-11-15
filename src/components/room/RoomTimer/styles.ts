import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  timer: {
    height: 27,
    borderRadius: 6,
    marginBottom: theme.spacing(3),
    backgroundColor: 'transparent',
    border: '4px solid #000'
  }
}));

