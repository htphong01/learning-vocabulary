import { Schema } from 'mongoose';
import { ICollection } from '@/app/interfaces';

const CollectionSchema = new Schema<ICollection>(
  {
    title: { type: String, required: true, index: true },
    slug: { type: String, slug: 'title', index: true }    
  },
  {
    timestamps: true,
  }
);

CollectionSchema.plugin(require('mongoose-slug-updater'));

export default CollectionSchema;
