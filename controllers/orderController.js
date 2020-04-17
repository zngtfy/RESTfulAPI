"use strict";

const mongoose = require("mongoose");
const m = require("../models/orderModel");
const sl = "company order_no ordered_on expires_on price amount value currency status type user_id _id";

exports.list = (req, res, next) => {
    m.find().select(sl).populate("company", "name logo status url").exec().then(docs => {
        const response = {
            count: docs.length,
            data: docs.map(doc => {
                return {
                    company: doc.company,
                    order_no: doc.order_no,
                    ordered_on: doc.ordered_on,
                    expires_on: doc.expires_on,
                    price: doc.price,
                    amount: doc.amount,
                    value: doc.price * doc.amount,
                    currency: doc.currency,
                    status: doc.status,
                    type: doc.type,
                    user_id: doc.user_id,
                    _id: doc._id,
                    request: {
                        type: "GET",
                        url: process.env.BASE_URL + "orders/" + doc._id
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
        company: req.body.companyId,
        order_no: req.body.orderNo,
        ordered_on: req.body.orderedOn,
        expires_on: req.body.expiresOn,
        price: req.body.price,
        amount: req.body.amount,
        value: req.body.value,
        currency: req.body.currency,
        status: req.body.status,
        type: req.body.type,
        user_id: req.body.userId
    });

    t.save().then(doc => {
        res.status(201).json({
            message: "Created successfully",
            data: {
                company: doc.company,
                order_no: doc.order_no,
                ordered_on: doc.ordered_on,
                expires_on: doc.expires_on,
                price: doc.price,
                amount: doc.amount,
                value: doc.price * doc.amount,
                currency: doc.currency,
                status: doc.status,
                type: doc.type,
                user_id: doc.user_id,
                _id: doc._id,
                request: {
                    type: "GET",
                    url: process.env.BASE_URL + "orders/" + doc._id
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

    m.findById(id).select(sl).populate("company", "name logo status url").exec().then(doc => {
        if (doc) {
            res.status(200).json({
                data: doc,
                request: {
                    type: "GET",
                    url: process.env.BASE_URL + "orders"
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
                url: process.env.BASE_URL + "orders/" + id
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
                url: process.env.BASE_URL + "orders"
            }
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};

exports.orderBookBuy = (req, res, next) => {
    const cid = req.params.cid;

    m.find({ company: { _id: cid }, type: "BUY" }).select(sl).populate("company", "name logo status url").exec().then(docs => {
        const response = {
            count: docs.length,
            data: docs.map(doc => {
                return {
                    company: doc.company,
                    order_no: doc.order_no,
                    ordered_on: doc.ordered_on,
                    expires_on: doc.expires_on,
                    price: doc.price,
                    amount: doc.amount,
                    value: doc.price * doc.amount,
                    currency: doc.currency,
                    status: doc.status,
                    type: doc.type,
                    user_id: doc.user_id,
                    _id: doc._id,
                    request: {
                        type: "GET",
                        url: process.env.BASE_URL + "orders/" + doc._id
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

exports.orderBookSell = (req, res, next) => {
    const cid = req.params.cid;

    m.find({ company: { _id: cid }, type: "SEL" }).select(sl).populate("company", "name logo status url").exec().then(docs => {
        const response = {
            count: docs.length,
            data: docs.map(doc => {
                return {
                    company: doc.company,
                    order_no: doc.order_no,
                    ordered_on: doc.ordered_on,
                    expires_on: doc.expires_on,
                    price: doc.price,
                    amount: doc.amount,
                    value: doc.price * doc.amount,
                    currency: doc.currency,
                    status: doc.status,
                    type: doc.type,
                    user_id: doc.user_id,
                    _id: doc._id,
                    request: {
                        type: "GET",
                        url: process.env.BASE_URL + "orders/" + doc._id
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

exports.listByUid = (req, res, next) => {
    const uid = req.params.uid;
    m.find({ user_id: uid }).select(sl).populate("company", "name logo status url").exec().then(docs => {
        const response = {
            count: docs.length,
            data: docs.map(doc => {
                return {
                    company: doc.company,
                    order_no: doc.order_no,
                    ordered_on: doc.ordered_on,
                    expires_on: doc.expires_on,
                    price: doc.price,
                    amount: doc.amount,
                    value: doc.price * doc.amount,
                    currency: doc.currency,
                    status: doc.status,
                    type: doc.type,
                    user_id: doc.user_id,
                    _id: doc._id,
                    request: {
                        type: "GET",
                        url: process.env.BASE_URL + "orders/" + doc._id
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