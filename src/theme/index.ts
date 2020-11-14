import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAFE4E',
    },
  },

  overrides: {
    MuiButton: {
      root: {
        height: 60,
        textTransform: 'initial'
      },

      contained: {
        boxShadow: 'none'
      }
    },

    MuiInput: {
      input: {
        "&::placeholder": {
          color: "red",
          fontWeight: 900
        },
        color: "white", // if you also want to change the color of the input, this is the prop you'd use
      }
    },

   MuiInputBase: {
      root: {
        fontWeight: 700,
      },

      input: {
        '&::placeholder': {
          fontWeight: 900
        }
      }
   },

    "MuiOutlinedInput": {
      focused: {
        borderWidth: 4
      },

      notchedOutline: {
        borderWidth: 4,
        borderColor: '#000'
      },
    },

    "MuiInputLabel": {
      root: {
        fontWeight: 700,
        color: "#000"
      }
    },


    // Typography
    MuiTypography: {
      h1: {
        fontSize: 60,
        fontWeight: 900
      }
    },

    // Divider

    MuiDivider: {
      root: {
        height: 4,
        borderRadius: 6,
        backgroundColor: '#000'
      }
    },

    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: '#FAFE4E',
          height: '100%'
        },

        'body, #__next, #__main': {
          height: '100%',
        }
      },
    },
  },
});

export default defaultTheme;