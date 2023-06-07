import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignUpSuccessScreen } from './SignUpSuccessScreen';

type ArgTypes = ComponentProps<typeof SignUpSuccessScreen>;

export default {
  title: 'components/SignUpSuccessScreen',
  component: SignUpSuccessScreen,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
