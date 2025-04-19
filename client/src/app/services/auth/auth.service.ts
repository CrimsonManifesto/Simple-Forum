import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';
import api from '../../core/api-client';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${environment.apiUrl}/auth`,
      withCredentials: true,    // send HttpOnly cookies
      headers: { 'Content-Type': 'application/json' }
    });

    // Optional: intercept responses or errors
    this.api.interceptors.response.use(
      res => res,
      err => Promise.reject(err.response || err)
    );
  }
  async register(data: { username: string; email: string; password: string }) {
    const res = await api.post('/auth/register', data);
    return res.data;
  }

  async login(data: { email: string; password: string }) {
    const res = await api.post('/auth/login', data);
    return res.data;
  }

  async logout() {
    const res = await api.post('/auth/logout');
    return res.data;
  }

  async getMe() {
    const res = await api.get('/auth/me');
    return res.data.user;
  }
}