'use strict';

var m = require('../models/bookModel');

var books = {
    list: function (req, res) {
        var allbooks = m;
        res.json(allbooks);
    },

    read: function (req, res) {
        var id = req.params.id;
        var book = m[0];
        res.json(book);
    },

    create: function (req, res) {
        var newbook = req.body;
        m.push(newbook);
        res.json(newbook);
    },

    update: function (req, res) {
        var updatebook = req.body;
        var id = req.params.id;
        m[id] = updatebook
        res.json(updatebook);
    },

    delete: function (req, res) {
        var id = req.params.id;
        m.splice(id, 1)
        res.json(true);
    }
};

module.exports = books;