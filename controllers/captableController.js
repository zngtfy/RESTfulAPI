"use strict";

const mongoose = require("mongoose");
const m = require("../models/captableModel");
const sl = "company first_name last_name email status kyc_status noof_tokens currency avg_price initial_unit_price value submitted_on _id";

exports.list = (req, res, next) => {
  m.find().select(sl).populate("company", "name logo status").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company: doc.company,
          first_name: doc.first_name,
          last_name: doc.last_name,
          email: doc.email,
          status: doc.status,
          kyc_status: doc.kyc_status,
          noof_tokens: doc.noof_tokens,
          currency: doc.currency,
          avg_price: doc.avg_price,
          initial_unit_price: doc.initial_unit_price,
          value: doc.value,
          submitted_on: doc.submitted_on,
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
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    status: req.body.status,
    kyc_status: req.body.kycStatus,
    noof_tokens: req.body.noofTokens,
    currency: req.body.currency,
    avg_price: req.body.avgPrice,
    initial_unit_price: req.body.initialUnitPrice,
    value: req.body.value,
    submitted_on: req.body.submittedOn
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        company: doc.company,
        first_name: doc.first_name,
        last_name: doc.last_name,
        email: doc.email,
        status: doc.status,
        kyc_status: doc.kyc_status,
        noof_tokens: doc.noof_tokens,
        currency: doc.currency,
        avg_price: doc.avg_price,
        initial_unit_price: doc.initial_unit_price,
        value: doc.value,
        submitted_on: doc.submitted_on,
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

  m.findById(id).select(sl).populate("company", "name logo status").exec().then(doc => {
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