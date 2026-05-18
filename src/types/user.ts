export interface User {
  id: string;
  name: string;
  email: string;

  //   password: string;
  igHandle?: string;
  avatarUrl?: string;

  metrics?: Record<string, number | string | boolean>; // Flexible field for storing various user metrics

  createdAt: Date;
  updatedAt: Date;
}
