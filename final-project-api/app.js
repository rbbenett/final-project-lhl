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
const cors = require("cors");
// const cookieSession = require('cookie-session');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cors());
app.use(express.json());
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
const indexRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");
const themesRoutes = require("./routes/themes");
const levelsRoutes = require("./routes/levels");
const contentsRoutes = require("./routes/contents");
const attemptsRoutes = require("./routes/attempts");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");

// Mount all resource routes
app.use("/", indexRoutes(db));
app.use("/api/users", usersRoutes(db));
app.use("/api/themes", themesRoutes(db));
app.use("/api/levels", levelsRoutes(db));
app.use("/api/contents", contentsRoutes(db));
app.use("/api/attempts", attemptsRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/login", loginRoutes(db));


app.listen(PORT, () => {
  console.log(`Lighthouse Marketplace listening on port ${PORT}`);
});
