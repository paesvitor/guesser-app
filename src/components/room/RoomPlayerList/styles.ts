import { makeStyles } from '@material-ui/core/styles';
import { RoomPlayerListProps } from '.';

export const useStyles = makeStyles((theme) => ({
  root: (props: RoomPlayerListProps) =>  ({
    paddingRight: theme.spacing(9),
    overflowY: 'scroll',

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

  playerCount: {
    fontSize: 27,
    fontWeight: 900
  }
}));

