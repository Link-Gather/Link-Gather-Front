import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import imageData from './data.mock';
import { Carousel } from './Carousel';

type ArgTypes = ComponentProps<typeof Carousel>;

export default {
  title: 'components/Carousel',
  component: Carousel,
  args: { images: imageData },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
