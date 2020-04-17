"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const m = require("../models/userModel");

exports.signup = (req, res, next) => {
    m.find({ email: req.body.email }).exec().then(user => {
        if (user.length >= 1) {
            return res.status(409).json({ message: "Mail exists" });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({ error: err });
                } else {
                    const user = new m({
                        _id: new mongoose.Types.ObjectId(),
                        first_name: req.body.firstName,
                        last_name: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        phone_no: req.body.phoneNo,
                        country_code: req.body.countryCode,
                        company: req.body.company,
                        terms_conditions: req.body.termsConditions
                    });
                    user.save().then(result => {
                        console.log(result);
                        res.status(201).json({ message: "User created" });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ error: err });
                    });
                }
            });
        }
    });
};

exports.login = (req, res, next) => {
    m.find({ email: req.body.email }).exec().then(user => {
        if (user.length < 1) {
            return res.status(401).json({ message: "Auth failed" });
        }

        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({ message: "Auth failed" });
            }
            if (result) {
                const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );

                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                });
            }
            res.status(401).json({ message: "Auth failed" });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};

exports.delete = (req, res, next) => {
    m.remove({ _id: req.params.id }).exec().then(result => {
        res.status(200).json({ message: "User deleted" });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
};