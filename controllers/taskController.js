'use strict';

const mongoose = require('mongoose');
const m = mongoose.model('Task');

exports.list = function (req, res) {
  m.find({}, function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.create = function (req, res) {
  const t = new m(req.body);
  t.save(function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.read = function (req, res) {
  m.findById(req.params.id, function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.update = function (req, res) {
  m.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.delete = function (req, res) {
  m.remove({ _id: req.params.id }, function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Task successfully deleted' });
  });
};