"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company_name: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    value: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true },
    submitted_on: { type: Date, required: true }
});

module.exports = mongoose.model("Tradehistory", sc);