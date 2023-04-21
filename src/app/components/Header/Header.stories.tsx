import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

type ArgTypes = ComponentProps<typeof Header>;

export default {
  title: 'components/Header',
  component: Header,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
