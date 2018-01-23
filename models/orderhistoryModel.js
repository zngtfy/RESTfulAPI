"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: false },
    action_on: { type: Date, required: true },
    action_by: { type: String, required: true },
    action_role: { type: String, required: true },
    action: { type: String, required: true },
    remarks: { type: String, required: true }
});

module.exports = mongoose.model("Orderhistory", sc);