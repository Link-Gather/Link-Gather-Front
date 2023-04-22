import type { ComponentProps } from 'react';
import type { DecoratorFn, Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

type ArgTypes = ComponentProps<typeof TextArea>;
const wrapper: DecoratorFn = (storyFn) => <div style={{ width: '300px', height: '150px' }}>{storyFn()}</div>;

export default {
  title: 'elements/TextArea',
  component: TextArea,
  args: {
    name: 'introduction',
    value: '안녕하세욥!',
    label: '자기소개',
    placeholder: '안녕하세욥!',
  },
  decorators: [wrapper],
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
