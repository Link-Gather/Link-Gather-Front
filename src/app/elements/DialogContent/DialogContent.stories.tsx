import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DialogContent } from './DialogContent';

type ArgTypes = ComponentProps<typeof DialogContent>;

export default {
  title: 'components/elements/DialogContent',
  component: DialogContent,
  args: { children: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
