import { apiClient } from './apiClient';
import { Profile } from '../types/ibbi';

export class ProfileService {
  private static readonly PROFILE_ENDPOINT = '/user/all'; // Adjust to your .NET endpoint

  public static async getProfile(): Promise<Profile> {
    try {
      return await apiClient.get<Profile>(this.PROFILE_ENDPOINT);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      throw error;
    }
  }
}