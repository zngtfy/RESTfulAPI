"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: false },
    owner: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    currency: { type: String, required: true },
    price: { type: Number, required: true },
    traded_date: { type: Date, required: true }
});

module.exports = mongoose.model("Captable", sc);