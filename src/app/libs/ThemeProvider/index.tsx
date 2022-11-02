import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type Theme = 'default' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'default',
  setTheme: () => {},
});

function ThemeProvider(props: { children: ReactNode }) {
  // prop destruction
  const { children } = props;

  // lib hooks
  // state, ref, querystring hooks
  const [theme, setTheme] = useState<Theme>('default');

  // form hooks
  // query hooks
  // calculated values
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  // effects
  // handlers

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider };
