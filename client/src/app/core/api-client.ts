// src/app/core/api-client.ts
import axios, { AxiosError, AxiosInstance } from 'axios';
import { environment } from '../../environments/environment';

const apiClient: AxiosInstance = axios.create({
  baseURL: `${environment.apiUrl}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

let isRefreshing = false;
let requestQueue: ((value: unknown) => void)[] = [];

apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          // This should be an endpoint that sets a new token cookie
          await apiClient.post('/auth/refresh');
          isRefreshing = false;
          requestQueue.forEach(cb => cb('refreshed'));
          requestQueue = [];
        } catch (refreshErr) {
          isRefreshing = false;
          requestQueue = [];
          return Promise.reject(refreshErr);
        }
      }

      return new Promise(resolve => {
        requestQueue.push(() => {
          resolve(apiClient(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);

export default apiClient;
