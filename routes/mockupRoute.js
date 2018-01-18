"use strict";

const express = require("express");
const router = express.Router();
const ct = require("../controllers/mockupController");

router.get("/my-orders", ct.list_my_orders);
router.get("/my-trades", ct.list_my_trades);
router.get("/my-assets", ct.list_my_assets);
router.get("/trading-boards", ct.list_trading_boards);
router.get("/trading-histories", ct.list_trading_histories);
router.get("/order-status", ct.list_order_status);
router.get("/trade-status", ct.list_trade_status);
router.get("/trade-history-status", ct.list_trade_history_status);

module.exports = router;