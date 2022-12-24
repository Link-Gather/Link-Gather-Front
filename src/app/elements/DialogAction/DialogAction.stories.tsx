import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DialogAction } from './DialogAction';

type ArgTypes = ComponentProps<typeof DialogAction>;

export default {
  title: 'components/elements/DialogAction',
  component: DialogAction,
  args: { children: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
