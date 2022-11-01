import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dimmer } from './Dimmer';

type ArgTypes = ComponentProps<typeof Dimmer>;

export default {
  title: 'components/Dimmer',
  component: Dimmer,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
