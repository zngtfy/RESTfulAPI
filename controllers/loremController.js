"use strict";

const sqlite3 = require("sqlite3").verbose();

exports.list = function (req, res) {
    const db = new sqlite3.Database("chinook.db3", sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Connected to the chinook database.");
    });

    db.all(`SELECT rowid AS id, info FROM lorem`, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        res.json(rows);
    });

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Close the database connection.");
    });
};