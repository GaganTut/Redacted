/*jshint esversion: 6*/

const express = require('express');
const bodyParser = require('body-parser');
const customWare = require('./customMiddleWare.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(customWare);

app.post('/message', (req, res) => {
  res.json(req.body);
});

const server = app.listen(8888);