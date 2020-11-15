import { makeStyles } from '@material-ui/core/styles';
import { RoomPlayerListProps } from '.';

export const useStyles = makeStyles((theme) => ({
  root: (props: RoomPlayerListProps) =>  ({
    paddingRight: theme.spacing(3),
    minWidth: 250,
    overflowY: 'scroll',
    backgroundColor: '#fff',
    padding: theme.spacing(3),
    borderRadius: '6px 0px 0px 6px',
    border: '4px solid',

    ...!props.ranking && {
      borderRight: '4px solid #000',
    },

    '&::-webkit-scrollbar': {
      width: 4,
  },
  '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
  },
  }),

  title: {
    '& span': {
      fontWeight: 400
    }
  },

  playerCount: {
    fontSize: 27,
    fontWeight: 900
  }
}));

