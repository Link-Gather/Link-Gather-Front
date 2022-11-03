import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

type ArgTypes = ComponentProps<typeof Carousel>;

export default {
  title: 'components/Carousel',
  component: Carousel,
  args: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
