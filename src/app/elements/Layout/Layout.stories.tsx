import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

type ArgTypes = ComponentProps<typeof Layout>;

export default {
  title: 'elements/Layout',
  component: Layout,
  args: { children: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
