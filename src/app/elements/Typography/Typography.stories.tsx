import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

type ArgTypes = ComponentProps<typeof Typography>;

export default {
  title: 'elements/Typography',
  component: Typography,
  args: {
    children: 'Typography',
    variant: 'body',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
