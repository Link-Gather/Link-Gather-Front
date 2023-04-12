import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkillDropdown } from './SkillDropdown';

type ArgTypes = ComponentProps<typeof SkillDropdown>;

export default {
  title: 'components/SkillDropdown',
  component: SkillDropdown,
  args: {
    skills: ['java', 'javascript'],
    thirdStepState: {
      searchSkill: '',
      urlString: '',
      selectedJob: '',
      selectedExperience: '',
      selectedSkill: [],
      urls: [],
      introduction: '',
    },
  },
  onClick: { action: 'onClick' },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
