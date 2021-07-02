import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0033a0',
      contrastText: '#fff',
    },
    secondary: { main: '#ff8200', contrastText: '#fff' },
    action: {
      disabledBackground: '#0033a0',
      disabled: '#fff',
    },
  },
  typography: {
    fontFamily: 'Titillium Web',
  },
});

export default theme;
