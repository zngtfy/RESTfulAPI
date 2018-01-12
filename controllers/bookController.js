"use strict";

const m = require("../models/bookModel");

const books = {
    list: function (req, res) {
        const allbooks = m;
        res.json(allbooks);
    },

    create: function (req, res) {
        const newbook = req.body;
        m.push(newbook);
        res.json(newbook);
    },

    read: function (req, res) {
        const id = req.params.id;
        const book = m[0];
        res.json(book);
    },

    update: function (req, res) {
        const updatebook = req.body;
        const id = req.params.id;
        m[id] = updatebook
        res.json(updatebook);
    },

    delete: function (req, res) {
        const id = req.params.id;
        m.splice(id, 1)
        res.json(true);
    }
};

module.exports = books;