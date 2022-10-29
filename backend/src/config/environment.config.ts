const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(3001),
  MONGO_USERNAME: Joi.string().required().description('MongoDB username'),
  MONGO_PASSWORD: Joi.string().required().description('MongoDB password'),
});

const { value: envVars, error } = envVarsSchema.validate(process.env);

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: `mongodb+srv://${envVars.MONGO_USERNAME}:${envVars.MONGO_PASSWORD}@english.vskxire.mongodb.net/learning?retryWrites=true&w=majority`,
  },
};
