import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from '../src/app/libs/theme';
import { StackProvider } from '../src/app/libs/stacks';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { rest } from 'msw';
import { stacks } from '../src/app/libs/stacks/data.mock';
import { API_ENDPOINT } from '../src/app/configs/index';

initialize();

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

export const decorators: DecoratorFn[] = [
  (storyFn, context) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <StackProvider>
            <CssBaseline />
            {storyFn()}
          </StackProvider>
        </ThemeProvider>
      </MemoryRouter>
    </QueryClientProvider>
  ),
  mswDecorator,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      getStacks: rest.get(`${API_ENDPOINT}/stacks`, (req, res, ctx) => res(ctx.json({ data: stacks }))),
    },
  },
};
