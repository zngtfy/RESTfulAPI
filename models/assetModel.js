"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ticker: { type: String, required: false },
    asset_name: { type: String, required: false },
    company_logo: { type: String, required: false },
    ave_traded_price: { type: Number, required: false },
    last_price: { type: Number, required: false },
    volume_held: { type: Number, required: false },
    market_value: { type: Number, required: false },
    profit_loss: { type: Number, required: false },
    profit_loss_percent: { type: Number, required: false },
    currency: { type: String, required: false },
    user_id: { type: String, required: false }
});

module.exports = mongoose.model("Asset", sc);