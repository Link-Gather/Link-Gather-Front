import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ImageBox } from './ImageBox';

type ArgTypes = ComponentProps<typeof ImageBox>;

export default {
  title: 'elements/ImageBox',
  component: ImageBox,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
