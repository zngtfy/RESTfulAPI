"use strict";

const express = require("express");
const router = express.Router();
const auth = require("../middleware/checkAuth");
const ct = require("../controllers/tradeController");

router.get("/", ct.list);
router.post("/", auth, ct.create);

router.get("/:id", ct.read);
router.patch("/:id", auth, ct.update);
router.delete("/:id", auth, ct.delete);

module.exports = router;