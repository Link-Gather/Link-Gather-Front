import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropDown } from './DropDown';

type ArgTypes = ComponentProps<typeof DropDown>;

export default {
  title: 'components/DropDown',
  component: DropDown,
  args: {
    value: '기획자',
    data: ['기획자', '디자이너'],
    thirdStepState: {
      searchSkill: '',
      urlString: '',
      selectedJob: '',
      selectedExperience: '',
      selectedSkill: [],
      urls: [],
      introduction: '',
    },
    setThirdStepState: (updatedState: { selectedJob?: string; selectExperience?: string }) => {
      console.log(updatedState);
    },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
