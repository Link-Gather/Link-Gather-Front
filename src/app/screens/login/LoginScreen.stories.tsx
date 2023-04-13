import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoginScreen } from './LoginScreen';

type ArgTypes = ComponentProps<typeof LoginScreen>;

export default {
  title: 'screens/LoginScreen',
  component: LoginScreen,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
