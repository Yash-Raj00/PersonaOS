export type SocialMetricValue = string | number | boolean;

export type SocialMetrics = Record<string, Record<string, SocialMetricValue>>;

export type SocialMetricsRecord = {
  id: string;
  userId: string; // ID of the persona who owns the metrics

  metrics: SocialMetrics;

  recordedAt: Date;
};

export interface User {
  id: string;
  name: string;
  email: string;

  igHandle?: string;
  avatarUrl?: string;

  socialMetricsRecords?: SocialMetricsRecord[];

  createdAt: Date;
  updatedAt: Date;
}
