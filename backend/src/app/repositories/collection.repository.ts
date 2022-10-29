import { Collection } from '../models';
import { CreateCollectionDto } from '../dtos/collection'

export class CollectionRepository {
  private collectionModel: typeof Collection;

  constructor() {
    this.collectionModel = Collection;
  }

  public getAllByConditions(conditions: Record<string, any> = {}) {
    return this.collectionModel.find(conditions);
  }

  public getOneByConditions(conditions: Record<string, any> = {}) {
    return this.collectionModel.findOne(conditions);
  }

  public insertOne(data: CreateCollectionDto) {
    return this.collectionModel.create(data);
  }

  public insertMany(data: CreateCollectionDto[]) {
    return this.collectionModel.insertMany(data);
  }
}
