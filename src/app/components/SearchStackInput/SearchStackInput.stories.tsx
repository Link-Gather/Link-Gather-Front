import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchStackInput } from './SearchStackInput';

type ArgTypes = ComponentProps<typeof SearchStackInput>;

export default {
  title: 'components/SearchStackInput',
  component: SearchStackInput,
  args: {
    label: '스택',
    required: true,
    type: 'project',
    value: [
      {
        id: 1,
        name: 'react',
      },
    ],
  },
  argTypes: {
    onAdd: { action: 'onAdd' },
    onDelete: { action: 'onDelete' },
    onChange: { action: 'onChange' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
