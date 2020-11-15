import { makeStyles } from '@material-ui/core/styles';

interface ColorPickerStyleProps {
  backgroundColor: string
}

export const useStyles = makeStyles((theme) => ({
  root: {
  
  },

  selectedColor: (props: ColorPickerStyleProps) => ({
    backgroundColor: props.backgroundColor
  }),

  color: {
      borderRadius: 6,
      width: 18,
      height: 18,
      border: '2px solid #fff'
    }
}));

