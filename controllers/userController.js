"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const m = require("../models/userModel");
const sl = "company first_name last_name email phone_no country_code status kyc_status _id";

exports.list = (req, res, next) => {
  m.find().select(sl).populate("company", "name logo").exec().then(docs => {
    const response = {
      count: docs.length,
      data: docs.map(doc => {
        return {
          company: doc.company,
          first_name: doc.first_name,
          last_name: doc.last_name,
          email: doc.email,
          phone_no: doc.phone_no,
          country_code: doc.country_code,
          status: doc.status,
          kyc_status: doc.kyc_status,
          _id: doc._id,
          request: {
            type: "GET",
            url: process.env.BASE_URL + "users/" + doc._id
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
  m.find({ email: req.body.email }).exec().then(user => {
    if (user.length >= 1) {
      return res.status(409).json({ message: "Mail exists" });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: err });
        } else {
          const t = new m({
            _id: new mongoose.Types.ObjectId(),
            company: req.body.companyId,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: hash,
            phone_no: req.body.phoneNo,
            country_code: req.body.countryCode,
            status: req.body.status,
            kyc_status: req.body.kycStatus
          });
          t.save().then(doc => {
            res.status(201).json({ message: "Data created" });
          }).catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
          });
        }
      });
    }
  });
};

exports.read = (req, res, next) => {
  const id = req.params.id;

  m.findById(id).select(sl).populate("company", "name logo").exec().then(doc => {
    if (doc) {
      res.status(200).json({
        data: doc,
        request: {
          type: "GET",
          url: process.env.BASE_URL + "users"
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
        url: process.env.BASE_URL + "users/" + id
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
        url: process.env.BASE_URL + "users"
      }
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
};

exports.login = (req, res, next) => {
  m.find({ email: req.body.email }).exec().then(doc => {
    if (doc.length < 1) {
      return res.status(401).json({ message: "Auth failed" });
    }

    bcrypt.compare(req.body.password, doc[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({ message: "Auth failed" });
      }

      if (result) {
        const token = jwt.sign(
          {
            email: doc[0].email,
            user_id: doc[0]._id
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