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
    src: `${S3_IMAGE_BUCKET}/arthur.svg`,
  },
} as Meta<ArgTypes>;

export const Arthur: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/arthur.svg`,
  },
};

export const Anjob: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/anjob.svg`,
  },
};

export const Bocha: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/bocha.svg`,
  },
};

export const Bunso: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/bunso.svg`,
  },
};

export const Dangdangdi: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/dangdangdi.svg`,
  },
};

export const Dororong: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/dororong.svg`,
  },
};

export const Duhong: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/duhong.svg`,
  },
};

export const Umshe: StoryObj<ArgTypes> = {
  args: {
    src: `${S3_IMAGE_BUCKET}/umshe.svg`,
  },
};

export const All: StoryObj<ArgTypes> = {
  render: () => (
    <Stack direction='row' spacing='16px'>
      <ProfileImage src={`${S3_IMAGE_BUCKET}/arthur.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/anjob.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/bocha.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/bunso.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/dangdangdi.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/dororong.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/duhong.svg`} />
      <ProfileImage src={`${S3_IMAGE_BUCKET}/umshe.svg`} />
    </Stack>
  ),
};
