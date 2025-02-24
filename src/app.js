const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');

const requestLogger = require("./middleware/logMiddleware");
const responseLogger = require("./middleware/responseLogger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(requestLogger);  // Logs incoming requests
app.use(responseLogger);// Logs outgoing responses
app.use(errorHandler);

app.use('/api/tasks', taskRoutes);

module.exports = app;
