import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

type ArgTypes = ComponentProps<typeof Label>;

export default {
  title: 'elements/Label',
  component: Label,
  args: {
    label: '직무',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
