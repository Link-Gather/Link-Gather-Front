import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

type ArgTypes = ComponentProps<typeof Carousel>;

export default {
  title: 'elements/Carousel',
  component: Carousel,
  args: {
    width: '200px',
    height: '300px',
    images: [
      { id: 1, src: 'https://picsum.photos/id/1/200/300', alt: 'image 1' },
      { id: 2, src: 'https://picsum.photos/id/2/200/300', alt: 'image 2' },
    ],
    className: 'my-carousel',
  },
  argTypes: {
    width: { type: 'string' },
    height: { type: 'string' },
    images: { id: { type: 'number' }, src: { type: 'string' }, alt: { type: 'string' } },
    className: { type: 'string' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
