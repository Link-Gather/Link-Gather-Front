import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

type ArgTypes = ComponentProps<typeof TextArea>;

export default {
  title: 'elements/TextArea',
  component: TextArea,
  args: {
    children: 'TextArea',
    variant: 'body',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
