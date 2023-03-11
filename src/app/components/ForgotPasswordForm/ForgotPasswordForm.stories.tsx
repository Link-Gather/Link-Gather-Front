import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordForm } from './ForgotPasswordForm';

type ArgTypes = ComponentProps<typeof ForgotPasswordForm>;

export default {
  title: 'components/ForgotPasswordForm',
  component: ForgotPasswordForm,
  args: { step: 1 },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
