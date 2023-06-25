import { load } from 'react-cookies';

export const getToken = () => {
  return load('accessToken') ? load('accessToken').split(' ')[1] : '';
};

export const isToken = () => {
  const token = load('accessToken');
  return !!token;
};
