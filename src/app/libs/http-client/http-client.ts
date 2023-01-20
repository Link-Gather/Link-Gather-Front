import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_ENDPOINT } from '@configs';

class HttpClient {
  private axios;

  constructor() {
    this.axios = Axios.create({ baseURL: API_ENDPOINT });
  }

  hasAccessToken() {
    return !!this.axios.defaults.headers.common.Authorization;
  }

  setAuthorization(authorization: string) {
    this.axios.defaults.headers.common.Authorization = `Bearer ${authorization}`;
  }

  removeAuthorization() {
    this.axios.defaults.headers.common.Authorization = '';
  }

  async get<T>(url: string, config?: { params?: Record<string, any> }): Promise<T> {
    return this.axios.get<T>(url, config).then(({ data }) => data);
  }
  async post<T>(url: string, data: Record<string, any>): Promise<T> {
    return this.axios.post<T>(url, data).then(({ data }) => data);
  }
  async patch<T>(url: string, data: Record<string, any>): Promise<T> {
    return this.axios.patch<T>(url, data).then(({ data }) => data);
  }
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.delete<T>(url, config);
  }
}

export const httpClient = new HttpClient();
