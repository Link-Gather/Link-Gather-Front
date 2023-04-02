import { Provider } from 'app/types';

export type User = {
  id: string;
  email: string;
  nickname: string;
  profileImage: string;
  provider: Provider;
  introduction: string;
  stacks: string[];
  career: any; // TODO:
  job: 'Developer' | 'Designer' | 'Product Manager' | 'Other';
  urls: string[];
};

export type UserSignIn = {
  errorMessages?: string;
};
