import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DialogContent } from './DialogContent';

type ArgTypes = ComponentProps<typeof DialogContent>;

export default {
  title: 'elements/DialogContent',
  component: DialogContent,
  args: { children: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
