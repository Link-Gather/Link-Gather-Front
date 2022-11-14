import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Theme, ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme } from '@emotion/react';
import * as palettes from './palettes';
import './index.css';

type Palette = keyof typeof palettes;

const PaletteContext = createContext<{ setPalette: (theme: Palette) => void }>({
  setPalette: () => {},
});
const spacing = (...args: number[]) => args.map((space) => `${space * 4}px`).join(' ');

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
    return {
      palette: palettes[palette],
      spacing,
    };
  }, [palette]);

  // effects
  // handlers

  return (
    <PaletteContext.Provider value={paletteSetter}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </PaletteContext.Provider>
  );
}

export const useTheme = (): [Theme, (palette: Palette) => void] => {
  const { setPalette } = useContext(PaletteContext);
  return [useEmotionTheme(), setPalette];
};

export { ThemeProvider };
