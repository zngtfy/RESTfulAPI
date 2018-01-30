"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: false },
    logo: { type: String, required: false },
    currency: { type: String, required: false },
    status: { type: String, required: false },
    note: { type: String, required: false },
    url: { type: String, required: false }
});

module.exports = mongoose.model("Company", sc);