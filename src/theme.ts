import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#171717ff',
    },
    secondary: {
      main: '#c48450ff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          
          borderRadius: 8,
          textTransform: 'none',

          
          '&:hover': {
            backgroundColor: `${theme.palette.secondary.main}`, 
            
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          
          borderRadius: 8,
          textTransform: 'none',

        
          '&:hover': {
            backgroundColor: `${theme.palette.secondary.main}`, 
            
          },
        }),
      },
    },
  },
});
