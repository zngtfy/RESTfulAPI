"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: false },
    order_no: { type: String, required: false },
    ordered_on: { type: Date, required: false },
    expires_on: { type: Date, required: false },
    price: { type: Number, required: false },
    amount: { type: Number, required: false },
    value: { type: Number, required: false },
    currency: { type: String, required: false },
    status: { type: String, required: false },
    type: { type: String, required: false },
    user_id: { type: String, required: false }
});

module.exports = mongoose.model("Order", sc);