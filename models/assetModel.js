"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ticker: { type: String, required: true },
    asset_name: { type: String, required: true },
    ave_traded_price: { type: Number, required: true },
    last_price: { type: Number, required: true },
    volume_held: { type: Number, required: true },
    market_value: { type: Number, required: true },
    profit_loss: { type: Number, required: true },
    profit_loss_percent: { type: Number, required: true },
    currency: { type: String, required: true }
});

module.exports = mongoose.model("Asset", sc);