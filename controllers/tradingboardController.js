"use strict";

const mongoose = require("mongoose");
const m = require("../models/tradingboardModel");
const sl = "company last_price noof_buy_orders noof_sell_orders highest_bid vwap lowest_ask _id";

exports.list = (req, res, next) => {
  m.find().select(sl).populate("company", "name logo").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company: doc.company,
          company_name: doc.company.name,
          last_price: doc.last_price,
          noof_buy_orders: doc.noof_buy_orders,
          noof_sell_orders: doc.noof_sell_orders,
          highest_bid: doc.highest_bid,
          vwap: doc.vwap,
          lowest_ask: doc.lowest_ask,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "tradingboards/" + doc._id
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
    last_price: req.body.lastPrice,
    noof_buy_orders: req.body.noofBuyOrders,
    noof_sell_orders: req.body.noofSellOrders,
    highest_bid: req.body.highestBid,
    vwap: req.body.vwap,
    lowest_ask: req.body.lowestAsk
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        company: doc.company,
        last_price: doc.last_price,
        noof_buy_orders: doc.noof_buy_orders,
        noof_sell_orders: doc.noof_sell_orders,
        highest_bid: doc.highest_bid,
        vwap: doc.vwap,
        lowest_ask: doc.lowest_ask,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "tradingboards/" + doc._id
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

  m.findById(id).select(sl).populate("company", "name logo").exec().then(doc => {
    if (doc) {
      res.status(200).json({
        data: doc,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "tradingboards"
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
        url: process.env.BASE_URL + "tradingboards/" + id
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
        url: process.env.BASE_URL + "tradingboards"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};