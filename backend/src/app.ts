import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import httpStatus from 'http-status';
import { MESSAGES } from '@constants/index';
import routes from '@routes/v1';
import { ResponseError } from '@app/interfaces';

const app: Express = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.use((req, res, next) => {
  const error: ResponseError = new Error();
  error.statusCode = httpStatus.NOT_FOUND;
  error.statusMessage = MESSAGES.NOT_FOUND;
  next(error);
});

app.use((error: ResponseError, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  const statusCode: number = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const statusMessage: string = error.statusMessage || MESSAGES.INTERNAL_SERVER_ERROR;
  res.statusMessage = statusMessage;
  res.status(statusCode).send();
});

export default app;
