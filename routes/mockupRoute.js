"use strict";

const express = require("express");
const router = express.Router();
const ct = require("../controllers/mockupController");

router.get("/order-status", ct.list_order_status);
router.get("/trade-status", ct.list_trade_status);
router.get("/trade-history-status", ct.list_trade_history_status);
router.get("/company-status", ct.list_company_status);
router.get("/currency", ct.list_currency);

module.exports = router;