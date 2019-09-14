import { createMuiTheme } from '@material-ui/core/styles';

const Colors = {
  primary: '#1B065E',
  primaryLight: '#23087B',
  primaryDark: '#11033D',
  primaryRgba: 'rgba(,0.5)',
  secondary: '#FF6B6B',
  secondaryLight: '#FF7474',
  secondaryDark: '#D75757',
  secondaryRgba: 'rgba(255, 107, 107, 0.3)',
  blueGreen: '#4ECDC4',
  yellow: '#FFE66D',
  yellowRgba: 'rgba(255, 230, 109, 0.3)',
  lightGrey: '#F7FFF7',
  darkGrey: '#413F4A',
};

const getAllColors = () => {
  return [Colors.primary, Colors.secondary, Colors.blueGreen, Colors.yellow];
};

const getPrimaryRgba = alpha => {
  return `rgba(27, 6, 94, ${alpha})`;
};

const getSecondaryRgba = alpha => {
  return `rgba(255, 107, 107, ${alpha})`;
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

export { theme, Colors, getPrimaryRgba, getSecondaryRgba, getAllColors };
