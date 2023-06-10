import { profiles } from '../../repositories/profile-repository.mock';

export const profileList = {
  count: profiles.length,
  data: profiles,
};
