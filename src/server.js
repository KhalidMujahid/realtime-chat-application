require("dotenv").config();
const express = require("express");
const path = require("path");
const {
  pageNotFound,
  generalHandler,
} = require("./middlewares/errorHandler.middleware");
const router = require("./routes/router.routes");
const app = express();

// middlewares
app.use(express.static(path.join(__dirname, "../", "public")));

// view engine
app.set("view engine", "ejs");

// testing route
app.use("/", router);

// page not found handler
app.use(pageNotFound);

// error handlers
app.use(generalHandler);

module.exports = app;
