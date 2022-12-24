import '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
      };
      error: {
        light: string;
        main: string;
        dark: string;
      };
      paper: string;
      text: string;
      contrastText: string;
    };
    spacing: (...args: number[]) => string;
  }
}
