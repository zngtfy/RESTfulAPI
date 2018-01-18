"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Ticker: { type: String, required: true },
    AssetName: { type: String, required: true },
    AveTradedPrice: { type: Number, required: true },
    LastPrice: { type: Number, required: true },
    VolumeHeld: { type: Number, required: true },
    MarketValue: { type: Number, required: true },
    ProfitLoss: { type: Number, required: true },
    ProfitLossPercent: { type: Number, required: true }
});

module.exports = mongoose.model("MyAsset", sc);