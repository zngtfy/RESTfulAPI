'use strict';

const mongoose = require("mongoose");
const m = require("../models/productModel");

exports.list = (req, res, next) => {
  m.find().select("name price _id productImage").exec().then(docs => {
    const response = {
      count: docs.length,
      products: docs.map(doc => {
        return {
          name: doc.name,
          price: doc.price,
          productImage: doc.productImage,
          _id: doc._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/products/" + doc._id
          }
        };
      })
    };
    if (docs.length >= 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'No entries found' });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.create = (req, res, next) => {
  const t = new m({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path
  });

  t.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Created product successfully",
      createdProduct: {
        name: result.name,
        price: result.price,
        _id: result._id,
        request: {
          type: "GET",
          url: "http://localhost:3000/products/" + result._id
        }
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.read = (req, res, next) => {
  const id = req.params.id;

  m.findById(id).select("name price _id productImage").exec().then(doc => {
    console.log("From database", doc);
    if (doc) {
      res.status(200).json({
        product: doc,
        request: {
          type: "GET",
          url: "http://localhost:3000/products"
        }
      });
    } else {
      res.status(404).json({ message: "No valid entry found for provided ID" });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.update = (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};

  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  m.update({ _id: id }, { $set: updateOps }).exec().then(result => {
    res.status(200).json({
      message: "Product updated",
      request: {
        type: "GET",
        url: "http://localhost:3000/products/" + id
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  m.remove({ _id: id }).exec().then(result => {
    res.status(200).json({
      message: "Product deleted",
      request: {
        type: "POST",
        url: "http://localhost:3000/products",
        body: { name: "String", price: "Number" }
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};