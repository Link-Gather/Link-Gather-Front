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
      { id: 1, name: 'React' },
      { id: 2, name: 'TypeScript' },
      { id: 3, name: 'JavaScript' },
      { id: 4, name: 'HTML' },
      { id: 5, name: 'CSS' },
      { id: 6, name: 'Java' },
      { id: 7, name: 'Python' },
      { id: 8, name: 'Mysql' },
      { id: 9, name: 'MongoDB' },
    ],
  },
  argTypes: {
    onAdd: { action: 'onAdd' },
    onChange: { action: 'onChange' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
