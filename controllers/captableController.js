"use strict";

const mongoose = require("mongoose");
const m = require("../models/captableModel");
const sl = "company owner email number currency price traded_date _id";

exports.list = (req, res, next) => {
  m.find().select(sl).populate("company", "name").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company: doc.company,
          owner: doc.owner,
          email: doc.email,
          number: doc.number,
          currency: doc.currency,
          price: doc.price,
          traded_date: doc.traded_date,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "captables/" + doc._id
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
    company: req.body.companyId,
    owner: req.body.owner,
    email: req.body.email,
    number: req.body.number,
    currency: req.body.currency,
    price: req.body.price,
    traded_date: req.body.tradedDate
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        company: doc.company,
        owner: doc.owner,
        email: doc.email,
        number: doc.number,
        currency: doc.currency,
        price: doc.price,
        traded_date: doc.traded_date,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "captables/" + doc._id
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
          url: process.env.BASE_URL + "captables"
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
        url: process.env.BASE_URL + "captables/" + id
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
        url: process.env.BASE_URL + "captables"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};