export type User = {
  id: string;
  email: string;
  nickname: string;
  profileImage: string;
  provider: Provider;
  introduction: string;
  stacks: string[];
  career: any; // TODO:
  job: JobType;
  urls: string[];
};
