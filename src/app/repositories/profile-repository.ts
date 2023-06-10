import { httpClient } from '../libs/http-client';
import { queryKeyMap } from '../libs/query';
import { Profile } from '../models';

export const profileRepository = {
  async list(params: {
    stacks?: number[];
    career?: number;
    // order: 'latest' | 'popularity' | 'oldest';
    page: number;
    limit: number;
  }) {
    return httpClient.get<Paginated<Profile>>('/profiles', { params });
  },
};

queryKeyMap.set(profileRepository.list, ['Profile']);
