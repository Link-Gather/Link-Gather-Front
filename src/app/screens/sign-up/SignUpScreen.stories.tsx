import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignUpScreen } from './SignUpScreen';

type ArgTypes = ComponentProps<typeof SignUpScreen>;

export default {
  title: 'screens/SignUpScreen',
  component: SignUpScreen,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
