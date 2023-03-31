import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CategoryTitle } from './CategoryTitle';

type ArgTypes = ComponentProps<typeof CategoryTitle>;

export default {
  title: 'elements/CategoryTitle',
  component: CategoryTitle,
  args: {
    label: '자기소개*',
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
