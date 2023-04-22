import React from 'react';
import type { ComponentProps } from 'react';
import type { DecoratorFn, Meta, StoryObj } from '@storybook/react';
import { DropDown } from './DropDown';

type ArgTypes = ComponentProps<typeof DropDown>;
const wrapper: DecoratorFn = (storyFn) => <div style={{ width: '376px' }}>{storyFn()}</div>;

export default {
  title: 'components/DropDown',
  component: DropDown,
  args: {
    options: [
      { label: '프론트엔드', value: 'Frontend Developer' },
      { label: '백엔드', value: 'Backend Developer' },
      { label: '디자이너', value: 'Designer' },
      { label: '기획자', value: 'Product Manager' },
      { label: '기타', value: 'Other' },
    ],
    thirdStepState: {
      searchSkill: '',
      urlString: '',
      selectedJob: '',
      selectedExperience: '',
      selectedSkills: [],
      urls: [],
      introduction: '',
    },
  },
  onClick: { action: 'onClick' },
  decorators: [wrapper],
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
