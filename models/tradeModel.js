"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    trade_no: { type: String, required: true },
    company: { type: String, required: true },
    submitted_on: { type: Date, required: true },
    trade_date: { type: Date, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    value: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model("Trade", sc);