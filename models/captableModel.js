"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: false },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true },
    kyc_status: { type: String, required: true },
    noof_tokens: { type: Number, required: true },
    currency: { type: String, required: true },
    avg_price: { type: Number, required: true },
    initial_unit_price: { type: Number, required: true },
    value: { type: Number, required: true },
    submitted_on: { type: Date, required: true }
});

module.exports = mongoose.model("Captable", sc);