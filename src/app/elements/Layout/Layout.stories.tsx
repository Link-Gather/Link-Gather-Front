import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

type ArgTypes = ComponentProps<typeof Layout>;

export default {
  title: 'elements/Layout',
  component: Layout,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
