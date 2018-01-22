"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company_name: { type: String, required: true },
    logo: { type: String, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model("Company", sc);