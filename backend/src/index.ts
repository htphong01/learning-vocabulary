import mongoose from 'mongoose';
import app from './app';
import environmentConfig from '@config/environment.config';
import logger from '@config/logger.config';

mongoose
  .connect(environmentConfig.mongoose.url)
  .then(() => {
    app.listen(environmentConfig.port, () => console.log('App listening on port ' + environmentConfig.port));
  })
  .catch((err: Error) => logger.error(err));
