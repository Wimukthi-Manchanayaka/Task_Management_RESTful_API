const logger = require("../utils/logger");

const responseLogger = (req, res, next) => {
  const oldSend = res.send;

  res.send = function (data) {
    logger.info(`Response: ${req.method} ${req.url} | Status: ${res.statusCode} | Data: ${data}`);
    oldSend.apply(res, arguments);
  };

  next();
};

module.exports = responseLogger;
