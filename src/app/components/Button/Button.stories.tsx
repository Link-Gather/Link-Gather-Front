import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

type ArgTypes = ComponentProps<typeof Button>;

export default {
  title: 'components/Button',
  component: Button,
  args: { children: 'Lorem Ipsum' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
