import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

type ArgTypes = ComponentProps<typeof Label>;

export default {
  title: 'components/Label',
  component: Label,
  args: {
    label: 'Label name',
    required: true,
    id: 'label-id',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
