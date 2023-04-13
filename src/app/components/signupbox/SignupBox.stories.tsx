import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignUpBox } from './SignUpBox';

type ArgTypes = ComponentProps<typeof SignUpBox>;

export default {
  title: 'components/SignUpBox',
  component: SignUpBox,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
