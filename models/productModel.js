'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

const sc = schema({
    _id: schema.Types.ObjectId,
    name: String,
    price: Number
});

module.exports = mongoose.model('Products', sc);