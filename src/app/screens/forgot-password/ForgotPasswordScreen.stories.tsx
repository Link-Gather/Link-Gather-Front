import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordScreen } from './ForgotPasswordScreen';

type ArgTypes = ComponentProps<typeof ForgotPasswordScreen>;

export default {
  title: 'screens/ForgotPasswordScreen',
  component: ForgotPasswordScreen,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
