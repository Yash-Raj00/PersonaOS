export interface Feedback {
  id: string;
  userId: string; // ID of the persona who owns the feedback
  
  title: string;
  description?: string;

  contentThumbnailUrl?: string;
  contentSourceUrl?: string;

  decisionIds: string[]; // Array of decision IDs that this feedback is related to

  createdAt: Date;
  updatedAt: Date;
}
