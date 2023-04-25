import '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  interface Theme extends MuiTheme {
    palette: {
      black: {
        main: string;
        b80: string;
        b60: string;
        b30: string;
        b12: string;
        b03: string;
        light: string;
        dark: string;
      };
      secondary: {
        red: string;
        green: string;
        beige: string;
        dahong: string;
        n800: string;
        n500: string;
        n300: string;
        n90: string;
        n60: string;
        n40: string;
        n30: string;
        n20: string;
        n10: string;
      };
      primary: {
        main: string;
        p80: string;
        p60: string;
        p40: string;
        p30: string;
        p20: string;
        light: string;
        dark: string;
      };
      paper: string;
      text: string;
      contrastText: string;
    };
  }
}
