"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order_no: { type: String, required: true },
    company: { type: String, required: true },
    ordered_on: { type: Date, required: true },
    expires_on: { type: Date, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    value: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model("Order", sc);