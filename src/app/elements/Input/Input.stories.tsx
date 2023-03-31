import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type ArgTypes = ComponentProps<typeof Input>;

export default {
  title: 'elements/Input',
  component: Input,
  args: {
    inputtype: 'error',
    width: '50px',
    height: '30px',
    message: 'validation check message',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
