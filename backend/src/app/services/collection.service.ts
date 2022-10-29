import { CollectionRepository } from '../repositories/collection.repository';
import { CreateCollectionDto } from '../dtos/collection'

export class CollectionService {
  private collectionRepo: CollectionRepository;

  constructor() {
    this.collectionRepo = new CollectionRepository();
  }

  public getAllCollection() {
    return this.collectionRepo.getAllByConditions({});
  }

  public getCollectionBySlug(slug: string) {
    return this.collectionRepo.getOneByConditions({ slug });
  }

  public createOneCollection(data: CreateCollectionDto) {
    return this.collectionRepo.insertOne(data);
  }
}
