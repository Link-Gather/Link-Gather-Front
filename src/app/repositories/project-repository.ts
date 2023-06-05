import { httpClient } from '../libs/http-client';
import { queryKeyMap } from '../libs/query';
import { Project } from '../models';

export const projectRepository = {
  async list(params: {
    stacks?: number[];
    purpose?: PurposeType;
    job?: JobType;
    order: 'latest' | 'popularity' | 'oldest';
    page: number;
    limit: number;
  }) {
    return httpClient.get<Project[]>('/projects', { params });
  },
  async create(params: {
    title: string;
    description: string;
    period: number;
    purpose: PurposeType;
    stacks: number[];
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

queryKeyMap.set(projectRepository.list, ['Project']);
queryKeyMap.set(projectRepository.create, ['Project']);
