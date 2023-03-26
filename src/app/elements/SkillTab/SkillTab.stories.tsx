import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkillTab } from './SkillTab';

type ArgTypes = ComponentProps<typeof SkillTab>;

export default {
  title: 'elements/SkillTab',
  component: SkillTab,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
