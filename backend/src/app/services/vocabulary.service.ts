import { VocabularyRepository } from '../repositories/vocabulary.repository';
import { CreateVocabularyDto } from '../dtos/vocabulary';

export class VocabularyService {
    private vocabularyRepo: VocabularyRepository;

    constructor() {
      this.vocabularyRepo = new VocabularyRepository();
    }
  
    public getAllVocabulary() {
      return this.vocabularyRepo.getAllByConditions({});
    }

    public getAllByCollection(collectionId: string) {
      return this.vocabularyRepo.getAllByConditions({ collectionId });
    }

    public createOneVocabulary(data: CreateVocabularyDto) {
      return this.vocabularyRepo.insertOne(data);
    }

    public createManyVocabulary(data: CreateVocabularyDto[]) {
      return this.vocabularyRepo.insertMany(data);
    }
}
