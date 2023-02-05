import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type ArgTypes = ComponentProps<typeof Input>;

export default {
  title: 'elements/Input',
  component: Input,
  args: {
    inputType: 'default',
    width: '50px',
    height: '30px',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
