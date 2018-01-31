"use strict";

const mongoose = require("mongoose");
const m = require("../models/companyModel");
const sl = "name logo currency status note url _id";

exports.list = (req, res, next) => {
  m.find().select(sl).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          name: doc.name,
          logo: doc.logo,
          currency: doc.currency,
          status: doc.status,
          note: doc.note,
          url: doc.url,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "companies/" + doc._id
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
    name: req.body.name,
    logo: req.file.path,
    currency: req.body.currency,
    status: req.body.status,
    note: req.body.note,
    url: req.body.url
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        name: doc.name,
        logo: doc.logo,
        currency: doc.currency,
        status: doc.status,
        note: doc.note,
        url: doc.url,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "companies/" + doc._id
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
          url: process.env.BASE_URL + "companies"
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
        url: process.env.BASE_URL + "companies/" + id
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
        url: process.env.BASE_URL + "companies"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.search = (req, res, next) => {
  const keyword = req.params.keyword;
  m.find({ name: keyword }).select(sl).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          name: doc.name,
          logo: doc.logo,
          currency: doc.currency,
          status: doc.status,
          note: doc.note,
          url: doc.url,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "companies/" + doc._id
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