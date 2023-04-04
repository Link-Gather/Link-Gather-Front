import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GithubLoginButton } from './GithubLoginButton';

type ArgTypes = ComponentProps<typeof GithubLoginButton>;

export default {
  title: 'elements/GithubLoginButton',
  component: GithubLoginButton,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
