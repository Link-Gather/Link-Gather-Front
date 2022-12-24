import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

type ArgTypes = ComponentProps<typeof Dialog>;

export default {
  title: 'components/Dialog',
  component: Dialog,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
