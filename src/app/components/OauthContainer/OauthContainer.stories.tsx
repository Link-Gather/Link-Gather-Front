import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { OauthContainer } from './OauthContainer';

type ArgTypes = ComponentProps<typeof OauthContainer>;

export default {
  title: 'components/OauthContainer',
  component: OauthContainer,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
