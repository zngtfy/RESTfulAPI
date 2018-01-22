"use strict";

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        /*let token = req.headers.authorization.split(" ")[1];
        let decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;*/
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
};