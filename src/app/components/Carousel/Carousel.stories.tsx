import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import images from '../../screens/data.mock';
import { Carousel } from './Carousel';

type ArgTypes = ComponentProps<typeof Carousel>;

export default {
  title: 'components/Carousel',
  component: Carousel,
  args: { images: images },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
