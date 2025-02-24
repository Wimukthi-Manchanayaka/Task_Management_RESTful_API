const logger = require("../utils/logger");

const requestLogger = (req, res, next) => {
  logger.info(`Request: ${req.method} ${req.url} | IP: ${req.ip} | User-Agent: ${req.headers["user-agent"]}`);
  next();
};

module.exports = requestLogger;
