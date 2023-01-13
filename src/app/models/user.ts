export type User = {
  id: string;
  email: string;
  nickname: string;
  profileImage: string;
  provider: 'kakao' | 'github' | 'google' | 'link-gather';
  introduction: string;
  stacks: string[];
  career: any; // TODO:
  job: 'Developer' | 'Designer' | 'Product Manager' | 'Other';
  urls: string[];
};
