// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 3004;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const app        = express();

// socket io
const server = require("http").createServer();
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"]
});
const users = {};
io.on("connection", client => {
  client.on("username", username => {
    const user = {
      name: username,
      id: client.id
    };
    users[client.id] = user;
    io.emit("connected", user);
    io.emit("users", Object.values(users));
  });

  client.on("send", message => {
    io.emit("message", {
      text: message,
      date: new Date().toISOString(),
      user: users[client.id]
    });
  });

  client.on("disconnect", () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit("disconnected", client.id);
  });
});

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
app.use("/attempts", attemptsRoutes(db));
app.use("/contents", contentsRoutes(db));
app.use("/users", usersRoutes(db));

app.listen(PORT, () => {
  console.log(`TypeCraft listening on port ${PORT}`);
});

// socket.io
server.listen(8000, () => console.log("socket io server is running on port 8000"));
