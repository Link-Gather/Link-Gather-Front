import { load, remove } from 'react-cookies';

export const getToken = () => {
  return load('accessToken') ? load('accessToken').split(' ')[1] : '';
};

export const removeToken = async () => {
  remove('accessToken');
  remove('refreshToken');
};

export const isToken = () => {
  const token = load('accessToken');
  return !!token;
};
