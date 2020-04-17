"use strict";

const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    task = require("./models/taskModel"),
    morgan = require("morgan"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

const productRoutes = require("./routes/productRoute");
const orderRoutes = require("./routes/orderRoute");
const userRoutes = require("./routes/userRoute");
const dashboardRoutes = require("./routes/dashboardRoute");
const mockupRoutes = require("./routes/mockupRoute");

const cnn = "mongodb+srv://node-shop:" + process.env.MONGO_ATLAS_PW
    + "@node-rest-shop-238ix.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(cnn);

app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/mockup", mockupRoutes);

const routes = require("./routes");
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + " not found" })
});

app.listen(port);
console.log("RESTful API server started on: " + port);