require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
// const MongoDBStore = require("connect-mongodb-session");
const {
  pageNotFound,
  generalHandler,
} = require("./middlewares/errorHandler.middleware");
const router = require("./routes/router.routes");

app.disable("x-powered-by");

// middlewares
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

// store session
// const store = new MongoDBStore({
//   uri:
//     process.env.NODE_ENV === "development"
//       ? process.env.MONGO_URI_SESSION_DEV
//       : process.env.MONGO_URI_SESSION,
//   collection: process.env.SESSSION_NAME,
// });

// session
app.use(
  session({
    secret: process.env.TOP_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    // store,
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

module.exports = http;

io.on("connection", (socket) => {
  console.log(socket);
});
