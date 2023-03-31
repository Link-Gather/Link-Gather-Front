import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OauthCallbackScreen } from './OauthCallbackScreen';

type ArgTypes = ComponentProps<typeof OauthCallbackScreen>;

export default {
  title: 'screens/OauthCallbackScreen',
  component: OauthCallbackScreen,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
