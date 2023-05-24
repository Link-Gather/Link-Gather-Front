import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StackChip } from './StackChip';

type ArgTypes = ComponentProps<typeof StackChip>;

export default {
  title: 'elements/StackChip',
  component: StackChip,
  args: {
    name: 'React',
    length: 1,
    selected: true,
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
