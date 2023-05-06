import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

type ArgTypes = ComponentProps<typeof TextArea>;

export default {
  title: 'components/TextArea',
  component: TextArea,
  args: {
    label: 'TextArea',
    required: true,
    placeholder: 'placeholder',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
