import { cookies } from '..';

export const getToken = () => {
  return cookies.get('token') || '';
};

export const isToken = () => {
  const token = cookies.get('token');
  return !!token;
};
