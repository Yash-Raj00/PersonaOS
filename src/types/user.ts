export interface User {
  id: string;

  name: string;
  avatarUrl?: string;

  email: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;
}
