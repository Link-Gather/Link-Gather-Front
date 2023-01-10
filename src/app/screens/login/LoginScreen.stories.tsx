import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LoginScreen } from './LoginScreen';

type ArgTypes = ComponentProps<typeof LoginScreen>;

export default {
  title: 'screens/LoginScreen',
  component: LoginScreen,
  args: {},
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
