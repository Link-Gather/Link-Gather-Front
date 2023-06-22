import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { profile } from './data.mock';

type ArgTypes = ComponentProps<typeof ProfileCard>;

export default {
  title: 'components/ProfileCard',
  component: ProfileCard,
  args: {
    profile,
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
