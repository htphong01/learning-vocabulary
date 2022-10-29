import winston, { format } from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(format.label({ label: 'Log Server' }), format.timestamp(), format.prettyPrint()),
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'combined.log' })],
});

export default logger;
