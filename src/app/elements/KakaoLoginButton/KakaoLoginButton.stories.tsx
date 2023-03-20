import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KakaoLoginButton } from './KakaoLoginButton';

type ArgTypes = ComponentProps<typeof KakaoLoginButton>;

export default {
  title: 'elements/KakaoLoginButton',
  component: KakaoLoginButton,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
