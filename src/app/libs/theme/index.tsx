import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Theme } from '@emotion/react';
import {
  createTheme,
  dialogContentClasses,
  ThemeProvider as MuiThemeProvider,
  useTheme as useEmotionTheme,
} from '@mui/material';
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
        MuiMenuItem: {
          defaultProps: {
            disableRipple: true,
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              borderRadius: '16px',
              boxShadow: '20px 16px 0px #000000',
            },
          },
        },
        MuiDialogTitle: {
          styleOverrides: {
            root: {
              padding: '24px',
            },
          },
        },
        MuiDialogContent: {
          styleOverrides: {
            root: {
              padding: '40px 60px',
            },
          },
        },
        MuiDialogActions: {
          styleOverrides: {
            root: {
              padding: '40px 60px',
              // https://github.com/mui/material-ui/blob/b265431f9a32ea726c5227821126fbc6424117d5/packages/mui-material/src/DialogContent/DialogContent.js#L41
              [`.${dialogContentClasses.root} + &`]: {
                paddingTop: '0px',
              },
            },
          },
        },
      },
      spacing: 4,
    });
    return {
      ...muiTheme,
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
