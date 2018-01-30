"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    key: { type: String, required: false },
    value: { type: String, required: false },
    type: { type: String, required: false }
});

module.exports = mongoose.model("Code", sc);