'use strict';

var mongoose = require('mongoose');
var m = mongoose.model('Products');

exports.list = (req, res, next) => {
    m.find().exec().then(docs => {
        console.log(docs);
        if (docs.length >= 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).json({ message: 'No entries found' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};

exports.create = (req, res, next) => {
    let p = new m({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    p.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling POST requests to /products",
            createdProduct: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};

exports.read = (req, res, next) => {
    let id = req.params.id;

    m.findById(id).exec().then(doc => {
        console.log("From database", doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message: "No valid entry found for provided ID" });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};

exports.update = (req, res, next) => {
    let id = req.params.id;
    let updateOps = {};

    for (let ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    m.update({ _id: id }, { $set: updateOps }).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};

exports.delete = (req, res, next) => {
    let id = req.params.id;

    m.remove({ _id: id }).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};