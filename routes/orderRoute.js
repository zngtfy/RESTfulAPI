'use strict';

const express = require("express");
const router = express.Router();
const auth = require('../middleware/checkAuth');
const ct = require('../controllers/orderController');

router.get("/", auth, ct.list);
router.post("/", auth, ct.create);

router.get("/:id", auth, ct.read);
router.delete("/:id", auth, ct.delete);

module.exports = router;