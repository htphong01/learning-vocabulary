import { Request, Response } from 'express';
import { VocabularyService } from '../services/vocabulary.service';
import { catchAsync } from '@/utils';

export class VocabularyController {
  private vocabularyService: VocabularyService;

  constructor() {
    this.vocabularyService = new VocabularyService();
  }

  /**
   * [GET] /api/v1/vocabularies
   */
  public index = catchAsync(async (req: Request, res: Response) => {
    const vocabularies = await this.vocabularyService.getAllVocabulary();
    res.json(vocabularies);
  });

  /**
   * [GET] /api/v1/vocabularies/:slug
   */
  public show = catchAsync(async (req: Request, res: Response) => {
    
  });

  /**
   * [GET] /api/v1/vocabularies/collections/:collectionsId
   * @param req
   * @param res
   */
  public collections = catchAsync(async (req: Request, res: Response) => {
    const vocabularies = await this.vocabularyService.getAllByCollection(req.params.collectionId);
    res.json(vocabularies);
  })

  /**
   * [POST] /api/v1/vocabularies
   */
  public create = catchAsync(async (req: Request, res: Response) => {
    await this.vocabularyService.createManyVocabulary(req.body);
    res.status(200).send();
  });

  /**
   * [PATCH] /api/v1/vocabularies/:id
   */
  public update = catchAsync(async (req: Request, res: Response) => {});

  /**
   * [DELETE] /api/v1/vocabularies/:id
   */

  public delete = catchAsync(async (req: Request, res: Response) => {});
}
