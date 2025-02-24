const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info", // Levels: error, warn, info, http, verbose, debug, silly
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // Logs to the console
    new transports.File({ filename: "logs/app.log" }) // Logs to a file
  ],
});

logger.add(new transports.File({ filename: "logs/error.log", level: "error" }));


module.exports = logger;
