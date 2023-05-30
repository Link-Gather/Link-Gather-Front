import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProjectRole } from './ProjectRole';
import { S3_IMAGE_BUCKET } from '../../configs';

type ArgTypes = ComponentProps<typeof ProjectRole>;

//TODO: decorator 라우터 적용, args 수정필요, job마다 스토리 1개씩 작성
//@ts-expect-error
export default {
  title: 'components/ProjectRole',
  component: ProjectRole,
  decorators: [(storyFn) => <div css={{ width: '220px' }}>{storyFn()}</div>],
  args: {
    role: {
      type: 'leader',
      job: 'backendDeveloper',
    },
    user: {
      id: 'uuid',
      profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
      nickname: 'arthur',
    },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
