import { Injectable } from '@angular/core';
import apiClient from '../../core/api-client';

export interface UserProfile {
  username: string;
  email: string;
  avatar?: string;
  // …other fields
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  // GET /api/profile
  async getProfile(): Promise<UserProfile> {
    const res = await apiClient.get<UserProfile>('/profile');
    return res.data;
  }

  // PUT /api/profile
  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    const res = await apiClient.put<UserProfile>('/profile', data);
    return res.data;
  }
}
