"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: false },
    last_price: { type: Number, required: true },
    noof_buy_orders: { type: Number, required: false },
    noof_sell_orders: { type: Number, required: true },
    highest_bid: { type: String, required: false },
    vwap: { type: String, required: false },
    lowest_ask: { type: String, required: true }
});

module.exports = mongoose.model("Tradingboard", sc);