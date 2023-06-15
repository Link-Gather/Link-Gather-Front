import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileDetailDialog } from './ProfileDetailDialog';
import { profile } from './data.mock';

type ArgTypes = ComponentProps<typeof ProfileDetailDialog>;

export default {
  title: 'components/ProfileDetailDialog',
  component: ProfileDetailDialog,
  args: {
    profile,
  },
  argTypes: {
    onClose: { action: 'onClose' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
