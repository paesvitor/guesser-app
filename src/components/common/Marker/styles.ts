import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    display: 'flex',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(0 0 0 / 19%)',
    borderRadius: 6,
    fontSize: 24,
    fontWeight: 900
  }
}));

