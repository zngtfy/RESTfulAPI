"use strict";

const mongoose = require("mongoose");
const m = require("../models/tradehistoryModel");
const sl = "company_name price amount value currency status submitted_on _id";

exports.list = (req, res, next) => {
  m.find().select(sl).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company_name: doc.company_name,
          price: doc.price,
          amount: doc.amount,
          value: doc.value,
          currency: doc.currency,
          status: doc.status,
          submitted_on: doc.submitted_on,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "tradehistories/" + doc._id
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
    company_name: req.body.companyName,
    price: req.body.price,
    amount: req.body.amount,
    value: req.body.value,
    currency: req.body.currency,
    status: req.body.status,
    submitted_on: req.body.submittedOn
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        company_name: doc.company_name,
        price: doc.price,
        amount: doc.amount,
        value: doc.value,
        currency: doc.currency,
        status: doc.status,
        submitted_on: doc.submitted_on,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "tradehistories/" + doc._id
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
          url: process.env.BASE_URL + "tradehistories"
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
        url: process.env.BASE_URL + "tradehistories/" + id
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
        url: process.env.BASE_URL + "tradehistories"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};