import winston from "winston";

const logger = winston.createLogger({
  level: "info", // Set default log level to 'info'
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

export default logger;