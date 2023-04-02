import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordForm } from './ForgotPasswordForm';

type ArgTypes = ComponentProps<typeof ForgotPasswordForm>;

export default {
  title: 'components/ForgotPasswordForm',
  component: ForgotPasswordForm,
  args: {
    step: 2,
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
