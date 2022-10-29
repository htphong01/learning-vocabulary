import mongoose from 'mongoose';
import CollectionSchema from './Collection.schema';
import VocabularySchema from './Vocabulary.schema';
import { ICollection, IVocabulary,  } from '@app/interfaces';

mongoose.plugin(require('mongoose-delete'));

export const Collection = mongoose.model<ICollection>('Collection', CollectionSchema);
export const Vocabulary = mongoose.model<IVocabulary>('Vocabulary', VocabularySchema);
