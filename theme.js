import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#48BFA3',
    },
    secondary: {
      main: '#404040',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ['"Mitr"', 'sans-serif'].join(','),
    body1: {
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#5a5a5a',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#5a5a5a',
      fontStyle: 'italic ',
    },
  },
})

export default theme
