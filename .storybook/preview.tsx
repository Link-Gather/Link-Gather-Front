import React, { useEffect } from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider, useTheme } from '../src/app/libs/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  (storyFn, context) => (
    <ThemeProvider>
      <ThemeSetter theme={context.parameters.backgrounds?.default === 'dark' ? 'dark' : 'default'} />
      {storyFn()}
    </ThemeProvider>
  )
]

function ThemeSetter(props: { theme: 'default' | 'dark' }) {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme(props.theme);
  }, [props.theme]);
  return null;
}