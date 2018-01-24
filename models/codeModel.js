"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    key: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, required: true }
});

module.exports = mongoose.model("Code", sc);