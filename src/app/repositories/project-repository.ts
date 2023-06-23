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
    return httpClient.get<Paginated<Project>>('/projects', { params });
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

  async retrieve({ id }: { id: string }) {
    return httpClient.get<Project>(`/projects/${id}`);
  },
};

queryKeyMap.set(projectRepository.list, ['Project']);
queryKeyMap.set(projectRepository.create, ['Project']);
queryKeyMap.set(projectRepository.retrieve, ['Project']);
