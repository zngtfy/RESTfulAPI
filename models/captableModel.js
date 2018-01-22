"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    owner: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    currency: { type: Number, required: true },
    price: { type: Number, required: true },
    traded_date: { type: Date, required: true }
});

module.exports = mongoose.model("Captable", sc);