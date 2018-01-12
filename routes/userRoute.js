"use strict";

const express = require("express");
const router = express.Router();
const auth = require("../middleware/checkAuth");
const ct = require("../controllers/userController");

router.post("/signup", ct.signup);
router.post("/login", ct.login);
router.delete("/:id", auth, ct.delete);

module.exports = router;