import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../Label';
import { BottomLineInput } from './BottomLineInput';

type ArgTypes = ComponentProps<typeof BottomLineInput>;

export default {
  title: 'elements/BottomLineInput',
  component: BottomLineInput,
  args: {
    label: '보유기술',
    name: 'searchSkill',
    type: 'text',
    value: 'BottomLineValue',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
