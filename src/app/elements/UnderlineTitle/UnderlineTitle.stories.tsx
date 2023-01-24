import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UnderlineTitle } from './UnderlineTitle';

type ArgTypes = ComponentProps<typeof UnderlineTitle>;

export default {
  title: 'elements/UnderlineTitle',
  component: UnderlineTitle,
  args: { title: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
