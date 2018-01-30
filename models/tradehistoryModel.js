"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company_name: { type: String, required: false },
    price: { type: Number, required: false },
    amount: { type: Number, required: false },
    value: { type: Number, required: false },
    currency: { type: String, required: false },
    status: { type: String, required: false },
    submitted_on: { type: Date, required: false }
});

module.exports = mongoose.model("Tradehistory", sc);