import React, { useEffect } from 'react';
import { DecoratorFn, StoryContext } from '@storybook/react';
import { ThemeProvider, useTheme } from '../src/app/libs/theme';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <ThemeSetter context={context} />
          <CssBaseline />
          {storyFn()}
        </ThemeProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
];

const colorToTheme = {
  '#F8F8F8': 'default',
  '#333333': 'dark',
};

function ThemeSetter({ context }: { context: StoryContext<any> }) {
  const [, setPalette] = useTheme();
  useEffect(() => {
    if (context.globals.backgrounds?.value) {
      setPalette(colorToTheme[context.globals.backgrounds.value] || 'default');
    } else if (context.parameters.backgrounds.default) {
      setPalette(context.parameters.backgrounds.default === 'dark' ? 'dark' : 'default');
    } else {
      setPalette('default');
    }
  }, [context]);
  return null;
}
