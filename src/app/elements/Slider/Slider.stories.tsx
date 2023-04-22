import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

type ArgTypes = ComponentProps<typeof Slider>;

export default {
  title: 'components/Slider',
  component: Slider,
  args: {
    label: 'Slider',
    required: true,
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
