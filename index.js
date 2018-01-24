"use strict";

const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

const cnn = "mongodb://node-shop:" + process.env.MONGO_ATLAS_PW
  + "@node-rest-shop-shard-00-00-238ix.mongodb.net:27017,node-rest-shop-shard-00-01-238ix.mongodb.net:27017,node-rest-shop-shard-00-02-238ix.mongodb.net:27017/capbridge?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin";
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

const orderRoutes = require("./routes/orderRoute");
const orderhistoryRoutes = require("./routes/orderhistoryRoute");
const tradeRoutes = require("./routes/tradeRoute");
const tradehistoryRoutes = require("./routes/tradehistoryRoute");
const tradingboardRoutes = require("./routes/tradingboardRoute");
const assetRoutes = require("./routes/assetRoute");
const companyRoutes = require("./routes/companyRoute");
const captableRoutes = require("./routes/captableRoute");
const userRoutes = require("./routes/userRoute");
const roleRoutes = require("./routes/roleRoute");
const codeRoutes = require("./routes/codeRoute");
const mockupRoutes = require("./routes/mockupRoute");

// Routes which should handle requests
app.use("/orders", orderRoutes);
app.use("/orderhistories", orderhistoryRoutes);
app.use("/trades", tradeRoutes);
app.use("/tradehistories", tradehistoryRoutes);
app.use("/tradingboards", tradingboardRoutes);
app.use("/assets", assetRoutes);
app.use("/companies", companyRoutes);
app.use("/captables", captableRoutes);
app.use("/users", userRoutes);
app.use("/roles", roleRoutes);
app.use("/codes", codeRoutes);
app.use("/mockup", mockupRoutes);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" })
});

app.listen(port);
console.log("RESTful API server started on: " + port);