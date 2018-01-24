"use strict";

const express = require("express");
const router = express.Router();
const ct = require("../controllers/mockupController");

router.get("/dashboard-order-status", ct.dashboardOrderStatus);
router.get("/dashboard-trade-status", ct.dashboardTradeStatus);
router.get("/order-status", ct.dashboardOrderStatus);
router.get("/trade-status", ct.tradeStatus);
router.get("/trade-history-status", ct.historyStatus);
router.get("/company-status", ct.companyStatus);
router.get("/role-status", ct.roleStatus);
router.get("/currency", ct.currency);

module.exports = router;