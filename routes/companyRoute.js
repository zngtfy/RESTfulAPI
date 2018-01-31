"use strict";

const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const auth = require("../middleware/checkAuth");
const ct = require("../controllers/companyController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./uploads";
        fs.exists(dir, (exists) => {
            if (exists) {
                cb(null, dir);
            }
            else {
                fs.mkdir(dir, err => cb(err, dir));
            }
        });
    },
    filename: function (req, file, cb) {
        const t = "_";
        cb(null, t + file.originalname);
    }
});

const filter = (req, file, cb) => {
    // Reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: filter
});

router.get("/", auth, ct.list);
router.post("/", auth, upload.single("logo"), ct.create);

router.get("/:id", auth, ct.read);
router.patch("/:id", auth, ct.update);
router.delete("/:id", auth, ct.delete);

router.get("/search/:keyword", auth, ct.search);

module.exports = router;