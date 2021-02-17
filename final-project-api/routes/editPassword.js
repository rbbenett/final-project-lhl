const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {

    let password = req.body.password;

    return db.query(`
      UPDATE users (password)
      VALUES($1)
      RETURNING *;
    `, [password])
      .then(response => {
        console.log("YO", response);
      })
      .catch(e => {
        response.send(e);
        console.log("CATCH BLOCK OF QUERY")
      });
  });

  return router;
};
