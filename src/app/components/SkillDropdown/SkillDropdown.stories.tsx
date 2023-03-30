import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkillDropdown } from './SkillDropdown';

type ArgTypes = ComponentProps<typeof SkillDropdown>;

export default {
  title: 'components/SkillDropdown',
  component: SkillDropdown,
  args: {
    skills: ['java', 'javascript'],
    searchSkill: 'java',
    selectSkill: ['java', 'javascript'],
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
