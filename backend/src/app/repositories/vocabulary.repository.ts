import { Vocabulary } from '../models';
import { CreateVocabularyDto } from '../dtos/vocabulary';

export class VocabularyRepository {
  private vocabularyModel: typeof Vocabulary;

  constructor() {
    this.vocabularyModel = Vocabulary;
  }

  public getAllByConditions(conditions: Record<string, any> = {}) {
    return this.vocabularyModel.find(conditions);
  }

  public getOneByConditions(conditions: Record<string, any> = {}) {
    return this.vocabularyModel.findOne(conditions);
  }

  public insertOne(data: CreateVocabularyDto) {
    return this.vocabularyModel.create(data);
  }

  public insertMany(data: CreateVocabularyDto[]) {
    return this.vocabularyModel.insertMany(data);
  }
}
