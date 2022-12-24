import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DialogTitle } from './DialogTitle';

type ArgTypes = ComponentProps<typeof DialogTitle>;

export default {
  title: 'elements/DialogTitle',
  component: DialogTitle,
  args: { children: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
