import { Request, Response } from 'express';
import { CollectionService } from '../services/collection.service';
import { catchAsync } from '@/utils';

export class CollectionController {
  private collectionService: CollectionService;

  constructor() {
    this.collectionService = new CollectionService();
  }

  /**
   * [GET] /api/v1/collections
   */
  public index = catchAsync(async (req: Request, res: Response) => {
    const collections = await this.collectionService.getAllCollection();
    return res.json(collections);
  });

  /**
   * [GET] /api/v1/collections/:slug
   */
  public show = catchAsync(async (req: Request, res: Response) => {
    const collections = await this.collectionService.getCollectionBySlug(req.params.slug);
    return res.json(collections);
  });

  /**
   * [POST] /api/v1/collections
   */
  public create = catchAsync(async (req: Request, res: Response) => {
    await this.collectionService.createOneCollection(req.body);
    res.send();
  });

  /**
   * [PATCH] /api/v1/collections/:id
   */
  public update = catchAsync(async (req: Request, res: Response) => {});

  /**
   * [DELETE] /api/v1/collections/:id
   */

  public delete = catchAsync(async (req: Request, res: Response) => {});
}
