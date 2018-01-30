"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: false },
    last_price: { type: Number, required: false },
    noof_buy_orders: { type: Number, required: false },
    noof_sell_orders: { type: Number, required: false },
    highest_bid: { type: Number, required: false },
    vwap: { type: String, required: false },
    lowest_ask: { type: Number, required: false },
    initial_token_price: { type: Number, required: false },
    currency: { type: String, required: false }
});

module.exports = mongoose.model("Tradingboard", sc);