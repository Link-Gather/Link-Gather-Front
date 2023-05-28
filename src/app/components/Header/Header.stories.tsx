import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Header } from '@components';

type ArgTypes = ComponentProps<typeof Header>;

export default {
  title: 'components/Header',
  component: Header,
  args: {},
  parameters: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
