import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DialogButton } from './DialogButton';

type ArgTypes = ComponentProps<typeof DialogButton>;

export default {
  title: 'components/Dialog',
  component: DialogButton,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
