import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GoogleLoginButton } from './GoogleLoginButton';

type ArgTypes = ComponentProps<typeof GoogleLoginButton>;

export default {
  title: 'elements/GoogleLoginButton',
  component: GoogleLoginButton,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
