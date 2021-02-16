const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/", (req, res) => {
    let username = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    return db.query(`
      INSERT INTO users (username, first_name, last_name, email, password, avatar, city, country)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `, [username, first_name, last_name, email, password, avatar, city, country])
      .then(response => {
        let userName = response.rows[0].username;
        let userID = response.rows[0].id;
        req.session["userName"] = userName;
        req.session["userID"] = userID;
        res.redirect("/profile");
        return response.rows[0] ? response.rows[0] : null;
      })
      .catch(e => response.send(e));
  });

  return router;
};
