import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { LoginScreen } from '@screens';

type ArgTypes = ComponentProps<typeof Layout>;

export default {
  title: 'elements/Layout',
  component: Layout,
  args: {
    componentStyle: 'full',
    children: <LoginScreen />,
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
