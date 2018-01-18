"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    OrderNo: { type: String, required: true },
    Company: { type: String, required: true },
    ExpiresOn: { type: Date, required: true },
    Price: { type: Number, required: true },
    Amount: { type: Number, required: true },
    Value: { type: Number, required: true },
    Currency: { type: String, required: true },
    Status: { type: String, required: true }
});

module.exports = mongoose.model("MyOrder", sc);