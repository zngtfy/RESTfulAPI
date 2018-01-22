"use strict";

const mongoose = require("mongoose");
const m = require("../models/assetModel");
const sl = "ticker asset_name ave_traded_price last_price volume_held market_value profit_loss profit_loss_percent _id";

exports.list = (req, res, next) => {
  m.find().select(sl).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          ticker: doc.ticker,
          asset_name: doc.asset_name,
          ave_traded_price: doc.ave_traded_price,
          last_price: doc.last_price,
          volume_held: doc.volume_held,
          market_value: doc.market_value,
          profit_loss: doc.profit_loss,
          profit_loss_percent: doc.profit_loss_percent,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "assets/" + doc._id
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
    ticker: req.body.ticker,
    asset_name: req.body.assetName,
    ave_traded_price: req.body.aveTradedPrice,
    last_price: req.body.lastPrice,
    volume_held: req.body.volumeHeld,
    market_value: req.body.marketValue,
    profit_loss: req.body.profitLoss,
    profit_loss_percent: req.body.profitLossPercent
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        ticker: doc.ticker,
        asset_name: doc.asset_name,
        ave_traded_price: doc.ave_traded_price,
        last_price: doc.last_price,
        volume_held: doc.volume_held,
        market_value: doc.market_value,
        profit_loss: doc.profit_loss,
        profit_loss_percent: doc.profit_loss_percent,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "assets/" + doc._id
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
          url: process.env.BASE_URL + "assets"
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
        url: process.env.BASE_URL + "assets/" + id
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
        url: process.env.BASE_URL + "assets"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};