import { createMuiTheme } from '@material-ui/core/styles';

const Colors = {
  primary: '#1B065E',
  primaryLight: '#23087B',
  primaryDark: '#11033D',
  secondary: '#FF6978',
  secondaryLight: '#FF8C97',
  secondaryDark: '#FF495A',
  lightGrey: '#FFFCF9',
  darkGrey: '#BFC0C0',
};

const theme = createMuiTheme({
  palette: {
    background: 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
    primary: {
      light: Colors.primaryLight,
      main: Colors.primary,
      dark: Colors.primaryDark,
      contrastText: '#fff',
    },
    secondary: {
      light: Colors.secondaryLight,
      main: Colors.secondary,
      dark: Colors.secondaryDark,
      contrastText: '#fff',
    },
    tertiary: {
      background: Colors.tertiary,
      color: '#fff',
    },
  },
});

export { theme, Colors };
