const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
  logger.error(`Error: ${err.message} | URL: ${req.url}`);
  res.status(500).json({ error: "Internal Server Error" });
};

module.exports = errorHandler;
