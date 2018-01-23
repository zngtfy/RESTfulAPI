"use strict";

const mongoose = require("mongoose");
const m = require("../models/orderhistoryModel");
const sl = "order action_on action_by action_role action remarks _id";

exports.list = (req, res, next) => {
  m.find().select(sl).populate("order", "order_no").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          order: doc.order,
          action_on: doc.action_on,
          action_by: doc.action_by,
          action_role: doc.action_role,
          action: doc.action,
          remarks: doc.remarks,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "orderhistories/" + doc._id
          }
        };
      })
    };
    if (docs.length >= 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "No entries found" });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.create = (req, res, next) => {
  const t = new m({
    _id: new mongoose.Types.ObjectId(),
    order: req.body.orderId,
    action_on: req.body.actionOn,
    action_by: req.body.actionBy,
    action_role: req.body.actionRole,
    action: req.body.action,
    remarks: req.body.remarks
  });

  t.save().then(doc => {
    res.status(201).json({
      message: "Created successfully",
      data: {
        order: doc.order,
        action_on: doc.action_on,
        action_by: doc.action_by,
        action_role: doc.action_role,
        action: doc.action,
        remarks: doc.remarks,
        _id: doc._id,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "orderhistories/" + doc._id
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

  m.findById(id).select(sl).exec().then(doc => {
    if (doc) {
      res.status(200).json({
        data: doc,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "orderhistories"
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

  m.update({ _id: id }, { $set: updateOps }).exec().then(doc => {
    res.status(200).json({
      message: "Data updated",
      request: {
        type: "GET",
        url: process.env.BASE_URL + "orderhistories/" + id
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  m.remove({ _id: id }).exec().then(doc => {
    res.status(200).json({
      message: "Data deleted",
      request: {
        type: "GET",
        url: process.env.BASE_URL + "orderhistories"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.orderHistory = (req, res, next) => {
  const oid = req.params.oid;
  m.find({ order: { _id: oid } }).select(sl).populate("order", "order_no").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          order: doc.order,
          action_on: doc.action_on,
          action_by: doc.action_by,
          action_role: doc.action_role,
          action: doc.action,
          remarks: doc.remarks,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "orderhistories/" + doc._id
          }
        };
      })
    };
    if (docs.length >= 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "No entries found" });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};