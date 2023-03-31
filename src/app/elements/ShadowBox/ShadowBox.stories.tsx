import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ShadowBox } from './ShadowBox';

type ArgTypes = ComponentProps<typeof ShadowBox>;

export default {
  title: 'elements/ShadowBox',
  component: ShadowBox,
  args: {
    children: (
      <div
        style={{
          width: '300px',
          height: '300px',
        }}
      >
        children
      </div>
    ),
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
