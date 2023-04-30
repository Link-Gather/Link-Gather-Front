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
          <CssBaseline />
          {storyFn()}
        </ThemeProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
];
