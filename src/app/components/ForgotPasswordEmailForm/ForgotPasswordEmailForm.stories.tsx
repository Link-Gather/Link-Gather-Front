import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordEmailForm } from './ForgotPasswordEmailForm';

type ArgTypes = ComponentProps<typeof ForgotPasswordEmailForm>;

export default {
  title: 'components/ForgotPasswordEmailForm',
  component: ForgotPasswordEmailForm,
  args: {
    step: 1,
  },
  argTypes: {
    step: { type: 'number' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
