import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VisibilityIconButton } from '@elements';

type ArgTypes = ComponentProps<typeof VisibilityIconButton>;

export default {
  title: 'elements/VisibilityIconButton',
  component: VisibilityIconButton,
  args: {
    isShow: true,
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};

export const Hide: StoryObj<ArgTypes> = {
  args: {
    isShow: false,
  },
};
