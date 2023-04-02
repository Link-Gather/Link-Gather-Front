import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type ArgTypes = ComponentProps<typeof Input>;

export default {
  title: 'elements/Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'placeholder',
    message: 'validation check message',
    style: { width: '350px', height: '50px' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
