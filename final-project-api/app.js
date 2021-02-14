// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// // const userRoutes = require("./routes/users");

// // app.use('/api/users', userRoutes(db));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;






// load .env data into process.env
require('dotenv').config();
// Web server config
const PORT       = process.env.PORT || 3004;
const ENV        = process.env.ENV || "development";
const express    = require("express");
// const bodyParser = require("body-parser");
// const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
// const cookieSession = require('cookie-session');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));
// app.use(express.static("public"));
// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1'],

//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");
// const loginRoutes = require("./routes/login");
// const logoutRoutes = require("./routes/logout");
// const registerRoutes = require("./routes/register");
// const postingsRoutes = require("./routes/postings");
// const markItemRoutes = require("./routes/markItems");
// const newConversationRoutes = require("./routes/newConversation");
// const conversationsRoutes = require("./routes/conversations");
// const favoritesRoutes = require("./routes/favorites");
// const messagesRoutes = require("./routes/messages");
// const createRoutes = require("./routes/create");
// const deleteItemRoutes = require("./routes/deleteItems");
// const poolFactory = require('pg/lib/pool-factory');

// Mount all resource routes

// app.use("/api/users", usersRoutes(db));
app.use("/", indexRoutes(db));
// app.use("/api/postings", postingsRoutes(db));
// app.use("/api/conversations", conversationsRoutes(db));
// app.use("/api/favorites", favoritesRoutes(db));
// app.use("/api/messages", messagesRoutes(db));
// app.use("/postings", postingsRoutes(db));
// app.use("/conversations", conversationsRoutes(db));
// app.use("/favorites", favoritesRoutes(db));
// app.use("/login", loginRoutes(db));
// app.use("/logout", logoutRoutes(db));
// app.use("/register", registerRoutes(db));
// app.use("/create", createRoutes(db));
// app.use("/markItems", markItemRoutes(db));
// app.use("/newConversation", newConversationRoutes(db));
// app.use("/deleteItems", deleteItemRoutes(db));

app.listen(PORT, () => {
  console.log(`Typecraft listening on port ${PORT}`);
});
