import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  avatar: () => ({
    width: 90,
    height: 90,
    borderRadius: '50%',
    cursor: 'pointer',

    '&:hover': {
      opacity: .7,
      transition: '.2s opacity'
    }
  }),

  editIconWrapper: {
    backgroundColor: 'rgb(0 0 0 / 34%)',
    borderRadius: '50%',
    padding: 4
  }
}));

