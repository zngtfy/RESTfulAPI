"use strict";

const mongoose = require("mongoose");

const sc = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    phone_no: { type: String, required: true },
    country_code: { type: String, required: true },
    company: { type: String, required: true },
    terms_conditions: { type: Boolean, required: true }
});

module.exports = mongoose.model("User", sc);