import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GithubLoginButton } from './GithubLoginButton';

type ArgTypes = ComponentProps<typeof GithubLoginButton>;

export default {
  title: 'elements/GithubLoginButton',
  component: GithubLoginButton,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
