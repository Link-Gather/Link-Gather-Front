import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColleaguesScreen } from './ColleaguesScreen';
import { rest } from 'msw';
import { API_ENDPOINT } from '../../configs';
import { profileList } from './data.mock';

type ArgTypes = ComponentProps<typeof ColleaguesScreen>;

export default {
  title: 'screens/ColleaguesScreen',
  component: ColleaguesScreen,
  args: {},
  parameters: {
    msw: {
      handlers: {
        getProjects: rest.get(`${API_ENDPOINT}/profiles`, (req, res, ctx) => res(ctx.json({ data: profileList }))),
      },
    },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
