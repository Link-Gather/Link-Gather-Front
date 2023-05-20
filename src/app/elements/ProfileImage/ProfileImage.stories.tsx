import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileImage } from './ProfileImage';
import { S3_IMAGE_BUCKET } from '../../configs';

type ArgTypes = ComponentProps<typeof ProfileImage>;

export default {
  title: 'elements/ProfileImage',
  component: ProfileImage,
} as Meta<ArgTypes>;

export const Lizard: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/lizard.svg`,
  },
};

export const Grey: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/grey.svg`,
  },
};

export const Pink: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/pink.svg`,
  },
};

export const Flower: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/flower.svg`,
  },
};

export const Pigtail: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/pigtail.svg`,
  },
};

export const Yellow: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/yellow.svg`,
  },
};

export const Peanut: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/peanut.svg`,
  },
};
