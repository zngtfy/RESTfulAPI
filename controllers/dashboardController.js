"use strict";

const mongoose = require("mongoose");
const mMyOrder = require("../models/dashboardMyOrderModel");
const mMyTrade = require("../models/dashboardMyTradeModel");
const mMyAsset = require("../models/dashboardMyAssetModel");

exports.list_myorders = (req, res, next) => {
  const f = "OrderNo Company ExpiresOn Price Amount Value Currency Status _id";
  mMyOrder.find().select(f).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          OrderNo: doc.OrderNo,
          Company: doc.Company,
          OrderedOn: doc.OrderedOn,
          ExpiresOn: doc.ExpiresOn,
          Price: doc.Price,
          Amount: doc.Amount,
          Value: doc.Value,
          Currency: doc.Currency,
          Status: doc.Status,
          _id: doc._id,
          request: {
            type: "GET",
            url: "rest-ful-api.herokuapp.com/dashboard/myorders/" + doc._id
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

exports.list_mytrades = (req, res, next) => {
  const f = "TradeNo Company SubmittedOn TradeDate Price Amount Value Currency Status _id";
  mMyTrade.find().select(f).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          TradeNo: doc.TradeNo,
          Company: doc.Company,
          SubmittedOn: doc.SubmittedOn,
          TradeDate: doc.TradeDate,
          Price: doc.Price,
          Amount: doc.Amount,
          Value: doc.Value,
          Currency: doc.Currency,
          Status: doc.Status,
          _id: doc._id,
          request: {
            type: "GET",
            url: "rest-ful-api.herokuapp.com/dashboard/mytrades/" + doc._id
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

exports.list_myassets = (req, res, next) => {
  const f = "Ticker AssetName AveTradedPrice LastPrice VolumeHeld MarketValue ProfitLoss ProfitLossPercent _id";
  mMyAsset.find().select(f).exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          Ticker: doc.Ticker,
          AssetName: doc.AssetName,
          AveTradedPrice: doc.AveTradedPrice,
          LastPrice: doc.LastPrice,
          VolumeHeld: doc.VolumeHeld,
          MarketValue: doc.MarketValue,
          ProfitLoss: doc.ProfitLoss,
          ProfitLossPercent: doc.ProfitLossPercent,
          _id: doc._id,
          request: {
            type: "GET",
            url: "rest-ful-api.herokuapp.com/dashboard/myassets/" + doc._id
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