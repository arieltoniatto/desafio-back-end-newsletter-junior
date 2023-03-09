const express = require('express');
const errorMiddleware = require('./middleware/error');
const routesUser = require('./routes/user.router');
const routesReport = require('./routes/report.router')

const app = express();

app.use(express.json());

app.use('/user', routesUser);
app.use('/report', routesReport);


app.use(errorMiddleware);


module.exports = app;
