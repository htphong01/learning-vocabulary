import { Schema } from 'mongoose';

export interface IVocabulary {
  english: string;
  vietnamese: string;
  category: string;
  pronounce: string;
  collectionId: Schema.Types.ObjectId;
  sentences: [string];
}
