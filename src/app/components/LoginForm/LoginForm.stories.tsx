import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

type ArgTypes = ComponentProps<typeof LoginForm>;

export default {
  title: 'components/LoginForm',
  component: LoginForm,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
