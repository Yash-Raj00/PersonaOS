export interface Decision {
  id: string;
  userId: string; // ID of the persona who owns the decision

  title: string;
  description?: string;

  status: DecisionStatus;
  thumbnailUrl?: string;

  inspirationIds?: string[]; // Array of inspiration IDs that influenced this decision
  feedbackIds?: string[]; // Array of feedback IDs related to this decision

  createdAt: Date;
  updatedAt: Date;
}

export enum DecisionStatus {
  ACTIVE = "ACTIVE",
  IN_PROGRESS = "IN_PROGRESS",
  PAUSED = "PAUSED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
