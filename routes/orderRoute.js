"use strict";

const express = require("express");
const router = express.Router();
const auth = require("../middleware/checkAuth");
const ct = require("../controllers/orderController");

router.get("/", auth, ct.list);
router.get("/:uid", auth, ct.listByUid);
router.post("/", auth, ct.create);

router.get("/:id", auth, ct.read);
router.patch("/:id", auth, ct.update);
router.delete("/:id", auth, ct.delete);

router.get("/buy/:cid", auth, ct.orderBookBuy);
router.get("/sell/:cid", auth, ct.orderBookSell);

module.exports = router;