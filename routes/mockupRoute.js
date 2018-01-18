"use strict";

const express = require("express");
const router = express.Router();
const ct = require("../controllers/mockupController");

router.get("/myorders", ct.list_myorders);
router.get("/mytrades", ct.list_mytrades);
router.get("/myassets", ct.list_myassets);
router.get("/tradingboards", ct.list_tradingboards);
router.get("/orderstatus", ct.list_orderstatus);
router.get("/tradestatus", ct.list_tradestatus);

module.exports = router;