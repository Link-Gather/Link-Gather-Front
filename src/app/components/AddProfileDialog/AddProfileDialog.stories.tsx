import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AddProfileDialog } from './AddProfileDialog';
import { rest } from 'msw';
import { API_ENDPOINT } from '../../configs';

type ArgTypes = ComponentProps<typeof AddProfileDialog>;

export default {
  title: 'components/AddProfileDialog',
  component: AddProfileDialog,
  args: {},
  argTypes: {
    onClose: { action: 'onClose' },
  },
  parameters: {
    msw: {
      handlers: {
        createProfile: rest.post(`${API_ENDPOINT}/profiles`, (req, res, ctx) => res(ctx.json({}))),
      },
    },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
