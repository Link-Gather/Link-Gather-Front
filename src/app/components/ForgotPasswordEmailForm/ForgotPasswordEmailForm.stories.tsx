import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordEmailForm } from './ForgotPasswordEmailForm';

type ArgTypes = ComponentProps<typeof ForgotPasswordEmailForm>;

export default {
  title: 'components/ForgotPasswordEmailForm',
  component: ForgotPasswordEmailForm,
  args: {
    step: 1,
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
