import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

type ArgTypes = ComponentProps<typeof Input>;

export default {
  title: 'elements/Input',
  component: Input,
  args: { children: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
