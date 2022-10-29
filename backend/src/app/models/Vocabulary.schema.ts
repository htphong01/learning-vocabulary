import { Schema } from 'mongoose';
import { IVocabulary } from '../interfaces';

const VocabularySchema = new Schema<IVocabulary>(
  {
    english: { type: String, required: true, index: true },
    vietnamese: { type: String, required: true, index: true },
    category: { type: String },
    pronounce: { type: String },
    collectionId: { type: Schema.Types.ObjectId, ref: 'collection' },
    sentences: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

export default VocabularySchema;
