import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileImage } from './ProfileImage';
import { S3_IMAGE_BUCKET } from '../../configs';
import { Stack } from '@mui/material';

type ArgTypes = ComponentProps<typeof ProfileImage>;

export default {
  title: 'elements/ProfileImage',
  component: ProfileImage,
  args: {
    src: `${S3_IMAGE_BUCKET}/lizard.svg`,
  },
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

export const All: StoryObj<ArgTypes> = {
  render: () => (
    <Stack direction='row' spacing='16px'>
      <ProfileImage src={`${S3_IMAGE_BUCKET}/lizard.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/grey.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/pink.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/flower.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/pigtail.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/orange.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/yellow.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/peanut.svg`} />
    </Stack>
  ),
};
