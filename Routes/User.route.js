const express = require("express");
const route = express.Router();

route.post("/register", (req, res, next) => {
  res.send("Register");
});

route.post("/refresh-token", (req, res, next) => {});

route.post("/login", (req, res, next) => {});

route.post("/logout", (req, res, next) => {});

module.exports = route;
