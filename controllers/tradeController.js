"use strict";

const mongoose = require("mongoose");
const m = require("../models/tradeModel");
const sl = "company trade_no submitted_on trade_date price amount value currency status user_id _id";

exports.list = (req, res, next) => {
  m.find().select(sl).populate("company", "name logo status").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company: doc.company,
          trade_no: doc.trade_no,
          submitted_on: doc.submitted_on,
          trade_date: doc.trade_date,
          price: doc.price,
          amount: doc.amount,
          value: doc.price * doc.amount,
          currency: doc.currency,
          status: doc.status,
          user_id: doc.user_id,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "trades/" + doc._id
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
    trade_no: req.body.tradeNo,
    submitted_on: req.body.submittedOn,
    trade_date: req.body.tradeDate,
    price: req.body.price,
    amount: req.body.amount,
    value: req.body.value,
    currency: req.body.currency,
    status: req.body.status,
    user_id: req.body.userId
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        company: doc.company,
        trade_no: doc.trade_no,
        submitted_on: doc.submitted_on,
        trade_date: doc.trade_date,
        price: doc.price,
        amount: doc.amount,
        value: doc.price * doc.amount,
        currency: doc.currency,
        status: doc.status,
        user_id: doc.user_id,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "trades/" + doc._id
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
          url: process.env.BASE_URL + "trades"
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

  m.update({ _id: id }, { $set: updateOps }).exec().then(result => {
    res.status(200).json({
      message: "Data updated",
      request: {
        type: "GET",
        url: process.env.BASE_URL + "trades/" + id
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  m.remove({ _id: id }).exec().then(result => {
    res.status(200).json({
      message: "Data deleted",
      request: {
        type: "GET",
        url: process.env.BASE_URL + "trades"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.tradeHistory = (req, res, next) => {
  const cid = req.params.cid;

  m.find({ company: { _id: cid } }).select(sl).populate("company", "name logo status").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company: doc.company,
          trade_no: doc.trade_no,
          submitted_on: doc.submitted_on,
          trade_date: doc.trade_date,
          price: doc.price,
          amount: doc.amount,
          value: doc.price * doc.amount,
          currency: doc.currency,
          status: doc.status,
          user_id: doc.user_id,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "trades/" + doc._id
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

exports.listByUid = (req, res, next) => {
  const uid = req.params.uid;
  m.find({ user_id: uid }).select(sl).populate("company", "name logo status").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company: doc.company,
          trade_no: doc.trade_no,
          submitted_on: doc.submitted_on,
          trade_date: doc.trade_date,
          price: doc.price,
          amount: doc.amount,
          value: doc.price * doc.amount,
          currency: doc.currency,
          status: doc.status,
          user_id: doc.user_id,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "trades/" + doc._id
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