import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

type ArgTypes = ComponentProps<typeof Button>;

export default {
  title: 'elements/Button',
  component: Button,
  args: {
    children: 'Lorem Ipsum is',
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
