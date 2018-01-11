'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  task = require('./models/taskModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://node-shop:node-shop@node-rest-shop-shard-00-00-238ix.mongodb.net:27017,node-rest-shop-shard-00-01-238ix.mongodb.net:27017,node-rest-shop-shard-00-02-238ix.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);