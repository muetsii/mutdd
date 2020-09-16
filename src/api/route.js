const app = require('express')();

const dummy = require('./dummy');

app.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

// TODO: log request/response

app.get('/dummy', dummy);

module.exports = app;
