"use strict";

const express = require("express");
const router = express.Router();
const auth = require("../middleware/checkAuth");
const ct = require("../controllers/codeController");

router.get("/", auth, ct.list);
router.post("/", auth, ct.create);

router.get("/:id", auth, ct.read);
router.patch("/:id", auth, ct.update);
router.delete("/:id", auth, ct.delete);

router.get("/bytype/:type", auth, ct.listByType);

module.exports = router;