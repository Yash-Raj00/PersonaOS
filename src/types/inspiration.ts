export interface Inspiration {
  id: string;
  userId: string; // ID of the persona who owns the inspiration

  title: string;
  description?: string;

  thumbnailUrl?: string;
  sourceUrl?: string;

  decisionIds?: string[]; // Array of decision IDs that were influenced by this inspiration

  createdAt: Date;
  updatedAt: Date;
}
