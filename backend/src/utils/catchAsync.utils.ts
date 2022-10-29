import { Request, Response, NextFunction } from 'express';
import { ResponseError } from '@/app/interfaces';

export const catchAsync = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((err: ResponseError) => next(err));
};
