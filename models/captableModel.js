"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: false },
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    email: { type: String, required: false },
    status: { type: String, required: false },
    kyc_status: { type: String, required: false },
    noof_tokens: { type: Number, required: false },
    currency: { type: String, required: false },
    avg_price: { type: Number, required: false },
    initial_unit_price: { type: Number, required: false },
    value: { type: Number, required: false },
    submitted_on: { type: Date, required: false }
});

module.exports = mongoose.model("Captable", sc);