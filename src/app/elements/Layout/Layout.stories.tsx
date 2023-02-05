import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';

type ArgTypes = ComponentProps<typeof Layout>;

export default {
  title: 'elements/Layout',
  component: Layout,
  args: {
    children: (
      <>
        <div css={{ border: '1px solid #aaaaaa' }}>First Child</div>
        <div css={{ border: '1px solid #aaaaaa' }}>Second Child</div>
        <div css={{ border: '1px solid #aaaaaa' }}>Third Child</div>
      </>
    ),
  },
  argTypes: {
    componentStyle: { type: 'string' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
