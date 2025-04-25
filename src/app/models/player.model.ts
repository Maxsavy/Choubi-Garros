export interface Player {
  id: number;
  name: string;
  email: string;
  status: 'En lice' | 'Eliminé';
  level: number;
}