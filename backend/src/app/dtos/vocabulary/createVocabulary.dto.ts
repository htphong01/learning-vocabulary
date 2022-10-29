import { Schema } from 'mongoose';

export interface CreateVocabularyDto {
  english: string;
  vietnamese: string;
  category: string;
  pronounce: string;
  collection: Schema.Types.ObjectId;
  sentences: [string];
}
