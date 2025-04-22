export interface Player {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  status: 'Active' | 'Onboarding' | 'Awaiting' | 'Removed';
  level?: string;
  ranking?: number;
}