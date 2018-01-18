"use strict";

const express = require("express");
const router = express.Router();
const ct = require("../controllers/dashboardController");

router.get("/myorders", ct.list_myorders);
router.get("/mytrades", ct.list_mytrades);
router.get("/myassets", ct.list_myassets);

module.exports = router;