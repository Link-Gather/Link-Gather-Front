import React from 'react';
import type { ComponentProps } from 'react';
import type { DecoratorFn, Meta, StoryObj } from '@storybook/react';
import { SkillTab } from './SkillTab';

type ArgTypes = ComponentProps<typeof SkillTab>;
const wrapper: DecoratorFn = (storyFn) => <div style={{ width: '136px' }}>{storyFn()}</div>;

export default {
  title: 'elements/SkillTab',
  component: SkillTab,
  args: {
    skill: { value: 'javascript', length: 2 },
    children: <span>javascript</span>,
  },
  decorators: [wrapper],
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
