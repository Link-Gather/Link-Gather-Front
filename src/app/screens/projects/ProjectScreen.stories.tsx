import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProjectsScreen } from './ProjectScreen';

type ArgTypes = ComponentProps<typeof ProjectsScreen>;

export default {
  title: 'screens/Project',
  component: ProjectsScreen,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
