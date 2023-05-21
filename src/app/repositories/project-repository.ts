import { httpClient } from '../libs/http-client';
import { queryKeyMap } from '../libs/query';

export const projectRepository = {
  create(params: {
    title: string;
    description: string;
    period: number;
    purpose: PurposeType;
    stacks: string[];
    leaderJob: JobType;
    recruitMember: {
      frontendDeveloper: number;
      backendDeveloper: number;
      designer: number;
      productManager: number;
    };
  }) {
    return httpClient.post('/projects', params);
  },
};

queryKeyMap.set(projectRepository.create, ['Project']);
