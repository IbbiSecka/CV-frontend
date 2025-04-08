import { apiClient } from './apiClient';
import { Profile, Project, Resume } from '../types/ibbi';

export class ProfileService {
  private static readonly PROFILE_ENDPOINT = '/user/all'; // Adjust to your .NET endpoint
  private static readonly RESUME_ENDPOINT = '/resume'; // Adjust to your .NET endpoint
  private static readonly PROJECTS_ENDPOINT = '/projects'; // Adjust to your .NET endpoint
  private static readonly EDUCATION_ENDPOINT = '/education'; // Adjust to your .NET endpoint

  public static async getProfile(): Promise<Profile> {
    try {
      return await apiClient.get<Profile>(this.PROFILE_ENDPOINT);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      throw error;
    }
  }
  public static async getResume(): Promise<Resume[]> {
    try {
      return await apiClient.get<Resume[]>(this.RESUME_ENDPOINT);
    } catch (error) {
      console.error('Failed to fetch resume:', error);
      throw error;
    }
  }
  public static async getProjects(): Promise<Project[]> {
    try {
      return await apiClient.get<Project[]>(this.PROJECTS_ENDPOINT);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      throw error;
    }
  }

}