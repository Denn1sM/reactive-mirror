import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d9d9d9',
      contrastText: '#d9d9d9',
      light: '#5e5d5e',
    },
    // secondary: blau
    // secondary.light -> info.main
    // info: rot
    // info.main -> secondary.light

    secondary: {
      main: 'rgb(134, 188, 194, 0.4)',
      light: 'rgb(134, 188, 194)',
      contrastText: '#aeb4b5',
    },
    info: {
      main: 'rgb(130, 18, 48, 0.8)',
      light: 'rgb(130, 18, 48)',
      dark: 'rgb(240, 255, 155, 0.7)',
    },
    success: {
      main: 'rgb(130, 18, 48, 0.1)',
    },

  },
});
export default theme;
