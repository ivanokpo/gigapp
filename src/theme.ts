import { createTheme } from "@mui/material";

export const theme = createTheme({
    
  palette: {
    mode: "dark",
    primary: {
      main: "#171717ff",
    },
    secondary: {
      main: "#c48450ff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
   components: {
    MuiIconButton: {
      styleOverrides: {
        root: ({theme}) => ({
          // default styling
          borderRadius: 8,
          textTransform: "none",

          // hover effect for all buttons
          "&:hover": {
            backgroundColor: `${theme.palette.secondary.main}`, // change to your color
            //color: "#ffffff",            // optional text color change
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({theme}) => ({
          // default styling
          borderRadius: 8,
          textTransform: "none",

          // hover effect for all buttons
          "&:hover": {
            backgroundColor: `${theme.palette.secondary.main}`, // change to your color
            //color: "#ffffff",            // optional text color change
          },
        }),
      },
    },
  },
});
