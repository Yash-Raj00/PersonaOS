export type SocialMetricValue = string | number | boolean;

export type SocialMetrics = Record<string, Record<string, SocialMetricValue>>;

export type SocialMetricRecord = {
  id: string;
  personaId: string; // ID of the persona who owns the metrics

  metrics: SocialMetrics;

  createdAt: Date;
  updatedAt: Date;
};

export interface Persona {
  id: string;
  name: string;
  email?: string;

  userId: string; // ID of the user who owns this persona

  igHandle?: string;
  avatarUrl?: string;

  socialMetricRecords?: SocialMetricRecord[];

  createdAt: Date;
  updatedAt: Date;
}
