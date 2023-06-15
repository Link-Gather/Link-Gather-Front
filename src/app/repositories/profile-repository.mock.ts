import { S3_IMAGE_BUCKET } from '../configs';
import { Profile } from '../models';

export const profiles: Profile[] = [
  {
    id: 'asdf',
    career: 1,
    job: 'frontendDeveloper',
    introduction: '안녕하세요',
    stacks: [1, 2, 3],
    urls: ['https://www.naver.com'],
    userId: 'userId',
    nickname: 'arthur',
    profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
  },
  {
    id: 'asdfafw',
    career: 1,
    job: 'backendDeveloper',
    introduction: '안녕하세요',
    stacks: [1, 2, 3],
    urls: ['https://www.naver.com'],
    userId: 'userId',
    nickname: 'arthur',
    profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
  },
  {
    id: 'asdfaf23fw',
    career: 1,
    job: 'designer',
    introduction: '안녕하세요',
    stacks: [1, 2, 3],
    urls: ['https://www.naver.com'],
    userId: 'userId',
    nickname: 'arthur',
    profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
  },

  {
    id: 'aa32fwsdfafw',
    career: 1,
    job: 'productManager',
    introduction: '안녕하세요',
    stacks: [1, 2, 3],
    urls: ['https://www.naver.com'],
    userId: 'userId',
    nickname: 'arthur',
    profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
  },
];
