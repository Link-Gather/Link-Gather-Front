import { stringify } from 'qs';
import { httpClient } from '../libs/http-client';
import { queryKeyMap } from '../libs/query';
import { Profile } from '../models';

export const profileRepository = {
  async list(params: { stacks?: number[]; career?: number; page: number; limit: number }) {
    return httpClient.get<Paginated<Profile>>('/profiles', { params, paramsSerializer: (params) => stringify(params) });
  },

  async create(params: { job: JobType; career: number; stacks: number[]; introduction: string; urls?: string[] }) {
    return httpClient.post('/profiles', params);
  },
};

queryKeyMap.set(profileRepository.list, ['Profile']);
queryKeyMap.set(profileRepository.create, ['Profile']);
