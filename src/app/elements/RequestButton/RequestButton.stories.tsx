import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RequestButton } from './RequestButton';

type ArgTypes = ComponentProps<typeof RequestButton>;

export default {
  title: 'elements/RequestButton',
  component: RequestButton,
  args: { children: 'Lorem Ipsum is' },
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
