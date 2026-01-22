import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#623afe',
    },
    background: {
      default: '#181818',
      paper: '#242424',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b2bbc8',
    },
    purple: '#623afe',
    pink: '#ed8bfe',
    yellow: '#edff7c',
    orange: '#ffa04d',
  },
  typography: {
    fontFamily: 'Inter, Georgia, sans-serif',
    h1: {
      fontSize: '4.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      '@media (max-width:960px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          padding: '12px 32px',
        },
      },
    },
  },
});

export default theme;