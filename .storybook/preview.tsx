import React, { useEffect } from 'react';
import { DecoratorFn, StoryContext } from '@storybook/react';
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
      <ThemeSetter context={context} />
      {storyFn()}
    </ThemeProvider>
  )
]

const colorToTheme = {
  '#F8F8F8': 'default',
  '#333333': 'dark',
}

function ThemeSetter({ context }: { context: StoryContext<any> }) {
  const { setTheme } = useTheme();
  useEffect(() => {
    if (context.globals.backgrounds?.value) {
      setTheme(colorToTheme[context.globals.backgrounds.value] || 'default');
    } else if (context.parameters.backgrounds.default) {
      setTheme(context.parameters.backgrounds.default === 'dark' ? 'dark' : 'default');
    } else {
      setTheme('default');
    }
  }, [context]);
  return null;
}
