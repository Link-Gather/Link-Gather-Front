import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignupBox } from './SignupBox';

type ArgTypes = ComponentProps<typeof SignupBox>;

export default {
  title: 'screens/signupbox',
  component: SignupBox,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
