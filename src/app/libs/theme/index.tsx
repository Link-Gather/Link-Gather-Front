import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Theme } from '@emotion/react';
import { createTheme, ThemeProvider as MuiThemeProvider, useTheme as useEmotionTheme } from '@mui/material';
import * as palettes from './palettes';
import './index.css';

type Palette = keyof typeof palettes;

const PaletteContext = createContext<{ setPalette: (theme: Palette) => void }>({
  setPalette: () => {},
});

function ThemeProvider(props: { children: ReactNode }) {
  // prop destruction
  const { children } = props;

  // lib hooks
  // state, ref, querystring hooks
  const [palette, setPalette] = useState<Palette>('default');

  // form hooks
  // query hooks
  // calculated values
  const paletteSetter = useMemo(() => ({ setPalette }), []);
  const theme = useMemo(() => {
    const muiTheme = createTheme({
      components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              height: '50px',
              padding: '10px 16px',
              border: '2px solid #B3BAC5',
              borderRadius: '8px',
              '&.Mui-focused': {
                borderColor: '#5555FF',
              },
              '&.Mui-error': {
                borderColor: '#FF2626',
              },
            },
            input: {
              padding: '0',
            },
            notchedOutline: {
              border: 'none',
            },
          },
        },
        MuiInputAdornment: {
          styleOverrides: {
            root: {
              marginRight: '0',
            },
          },
        },
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              margin: '0',
            },
          },
        },
        MuiIconButton: {
          defaultProps: {
            disableRipple: true,
          },
          styleOverrides: {
            root: {
              padding: '0',
            },
          },
        },
      },
      spacing: 4,
    });
    return {
      ...muiTheme,
      components: {
        MuiMenuItem: {
          defaultProps: {
            disableRipple: true,
          },
        },
      },
      palette: {
        ...muiTheme.palette,
        ...palettes[palette],
      },
    };
  }, [palette]);

  // effects
  // handlers

  return (
    <PaletteContext.Provider value={paletteSetter}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </PaletteContext.Provider>
  );
}

export const useTheme = (): [Theme, (palette: Palette) => void] => {
  const { setPalette } = useContext(PaletteContext);
  return [useEmotionTheme(), setPalette];
};

//HACK: 일단 mui의 theme대신 emotion의 theme을 사용하도록 한다.
export { ThemeProvider, Theme };

export * from './media-query';
