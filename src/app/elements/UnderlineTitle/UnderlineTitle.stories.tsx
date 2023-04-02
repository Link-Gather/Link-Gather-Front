import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UnderlineTitle } from './UnderlineTitle';

type ArgTypes = ComponentProps<typeof UnderlineTitle>;

export default {
  title: 'elements/UnderlineTitle',
  component: UnderlineTitle,
  args: { title: 'Lorem Ipsum is' },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
