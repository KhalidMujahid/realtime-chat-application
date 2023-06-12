require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const {
  pageNotFound,
  generalHandler,
} = require("./middlewares/errorHandler.middleware");
const router = require("./routes/router.routes");
const app = express();

app.disable("x-powered-by");

// middlewares
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// session
app.use(
  session({
    secret: process.env.TOP_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use(cookieParser());

// view engine
app.set("view engine", "ejs");
app.use(expressLayouts);

// testing route
app.use("/", router);

// page not found handler
app.use(pageNotFound);

// error handlers
app.use(generalHandler);

module.exports = app;
