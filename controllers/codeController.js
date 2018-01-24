"use strict";

const mongoose = require("mongoose");
const m = require("../models/codeModel");
const sl = "key value type _id";

exports.list = (req, res, next) => {
  m.find().select(sl).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          key: doc.key,
          value: doc.value,
          type: doc.type,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "codes/" + doc._id
          }
        };
      })
    };
    if (docs.length >= 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "No entries found" });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.create = (req, res, next) => {
  const t = new m({
    _id: new mongoose.Types.ObjectId(),
    key: req.body.key,
    value: req.body.value,
    type: req.body.type
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        key: doc.key,
        value: doc.value,
        type: doc.type,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "codes/" + doc._id
        }
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.read = (req, res, next) => {
  const id = req.params.id;

  m.findById(id).select(sl).exec().then(doc => {
    if (doc) {
      res.status(200).json({
        data: doc,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "codes"
        }
      });
    } else {
      res.status(404).json({ message: "No valid entry found for provided ID" });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.update = (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};

  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  m.update({ _id: id }, { $set: updateOps }).exec().then(doc => {
    res.status(200).json({
      message: "Data updated",
      request: {
        type: "GET",
        url: process.env.BASE_URL + "codes/" + id
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  m.remove({ _id: id }).exec().then(doc => {
    res.status(200).json({
      message: "Data deleted",
      request: {
        type: "GET",
        url: process.env.BASE_URL + "codes"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.listByType = (req, res, next) => {
  const type = req.params.type;

  m.find({ type: type }).select(sl).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          key: doc.key,
          value: doc.value,
          type: doc.type,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "codes/" + doc._id
          }
        };
      })
    };
    if (docs.length >= 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "No entries found" });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};