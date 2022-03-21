'use strict';

const express = require('express');

const app = express(); // 'singleton' design pattern

app.get('/hello', (req, res, next) => {
  res.send("hello world");
});

module.exports = app;