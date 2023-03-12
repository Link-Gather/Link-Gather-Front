import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LoginBottomInfo } from './LoginBottomInfo';

type ArgTypes = ComponentProps<typeof LoginBottomInfo>;

export default {
  title: 'components/LoginBottomInfo',
  component: LoginBottomInfo,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
