"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: false },
    remarks: { type: String, required: false },
    status: { type: String, required: false }
});

module.exports = mongoose.model("Role", sc);