"use strict";

const express = require("express");
const router = express.Router();
const ct = require("../controllers/dashboardController");

router.get("/my-orders", ct.list_myorders);
router.get("/my-trades", ct.list_mytrades);
router.get("/my-assets", ct.list_myassets);

module.exports = router;