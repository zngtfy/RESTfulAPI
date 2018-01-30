"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: false },
    action_on: { type: Date, required: false },
    action_by: { type: String, required: false },
    action_role: { type: String, required: false },
    action: { type: String, required: false },
    remarks: { type: String, required: false }
});

module.exports = mongoose.model("Orderhistory", sc);